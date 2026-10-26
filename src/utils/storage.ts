import { HeritageItem, ErrorReport } from '../types/heritage';
import { INITIAL_HERITAGE_ITEMS } from '../data/sulawesiHeritageData';
import { ADDITIONAL_HERITAGE_ITEMS } from '../data/sulawesiAdditionalHeritage';
import { ADDITIONAL_HERITAGE_ITEMS_PART2 } from '../data/sulawesiAdditionalHeritage2';
import { NEW_HERITAGE_ITEMS_70 } from '../data/sulawesiNewHeritageItems';
import { TRIBE_EXPANSION_ITEMS } from '../data/sulawesiTribeExpansion';
import { TRIBE_EXPANSION_ITEMS_PART2 } from '../data/sulawesiTribeExpansionPart2';
import { TRIBE_EXPANSION_ITEMS_PART3 } from '../data/sulawesiTribeExpansionPart3';
import { enrichHeritageItem } from './academicEnrichment';
import {
  fetchAllHeritageItemsFromSupabase,
  insertItemToSupabase,
  testSupabaseConnection,
} from './supabase';

export const ALL_INITIAL_ITEMS: HeritageItem[] = [
  ...INITIAL_HERITAGE_ITEMS,
  ...ADDITIONAL_HERITAGE_ITEMS,
  ...ADDITIONAL_HERITAGE_ITEMS_PART2,
  ...NEW_HERITAGE_ITEMS_70,
  ...TRIBE_EXPANSION_ITEMS,
  ...TRIBE_EXPANSION_ITEMS_PART2,
  ...TRIBE_EXPANSION_ITEMS_PART3,
].map(enrichHeritageItem);

const STORAGE_KEY = 'warisan_digital_sulawesi_items';
const BOOKMARKS_KEY = 'warisan_digital_bookmarks';
const ERROR_REPORTS_KEY = 'warisan_digital_error_reports';
const FONT_SIZE_KEY = 'warisan_digital_font_size';
const THEME_KEY = 'warisan_digital_theme';

export function getSavedHeritageItems(): HeritageItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ALL_INITIAL_ITEMS));
      return ALL_INITIAL_ITEMS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ALL_INITIAL_ITEMS));
      return ALL_INITIAL_ITEMS;
    }

    // Merge any missing initial items so all newly added seeds are automatically present
    const existingIds = new Set(parsed.map((item: any) => item.id));
    const missingSeedItems = ALL_INITIAL_ITEMS.filter((item) => !existingIds.has(item.id));
    const currentEnriched = parsed.map(enrichHeritageItem);

    if (missingSeedItems.length > 0) {
      const merged = [...currentEnriched, ...missingSeedItems];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }

    return currentEnriched;
  } catch (e) {
    console.error('Error reading localStorage:', e);
    return ALL_INITIAL_ITEMS;
  }
}

/**
 * Saves a new heritage item to local storage AND sends it to Supabase database.
 */
export function saveHeritageItem(newItem: HeritageItem): HeritageItem[] {
  try {
    const current = getSavedHeritageItems();
    const updated = [newItem, ...current.filter((x) => x.id !== newItem.id)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Asynchronously sync to Supabase Cloud Database
    insertItemToSupabase(newItem).catch((err) => {
      console.warn('Background Supabase save notification:', err);
    });

    return updated;
  } catch (e) {
    console.error('Error saving item:', e);
    return getSavedHeritageItems();
  }
}

/**
 * Updates an existing heritage item with user corrections (spelling, terms, narrators, etc.)
 */
export function updateHeritageItem(
  updatedItem: HeritageItem,
  editorName: string = 'Warga Komunitas',
  note: string = 'Perbaikan ejaan / istilah'
): HeritageItem[] {
  try {
    const current = getSavedHeritageItems();
    const existingIndex = current.findIndex((x) => x.id === updatedItem.id);
    const existingItem = existingIndex !== -1 ? current[existingIndex] : null;

    const previousHistory = existingItem?.editHistory || [];
    const newEntry = {
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      editorName: editorName.trim() || 'Warga Komunitas',
      note: note.trim() || 'Perbaikan teks',
    };

    const itemWithHistory: HeritageItem = {
      ...updatedItem,
      lastEditedBy: newEntry.editorName,
      lastEditedAt: newEntry.date,
      editCount: (existingItem?.editCount || 0) + 1,
      editHistory: [newEntry, ...previousHistory],
    };

    let updatedList: HeritageItem[];
    if (existingIndex !== -1) {
      updatedList = [...current];
      updatedList[existingIndex] = itemWithHistory;
    } else {
      updatedList = [itemWithHistory, ...current];
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

    // Async sync to Supabase Cloud
    insertItemToSupabase(itemWithHistory).catch((err) => {
      console.warn('Background Supabase update notification:', err);
    });

    return updatedList;
  } catch (e) {
    console.error('Error updating heritage item:', e);
    return getSavedHeritageItems();
  }
}

/**
 * Resets a single item back to its original seed content from ALL_INITIAL_ITEMS
 */
export function resetItemToOriginal(id: string): HeritageItem[] {
  try {
    const original = ALL_INITIAL_ITEMS.find((x) => x.id === id);
    if (!original) return getSavedHeritageItems();

    const current = getSavedHeritageItems();
    const updated = current.map((x) => (x.id === id ? original : x));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error resetting item:', e);
    return getSavedHeritageItems();
  }
}

/**
 * Resets all heritage items back to default seed state
 */
export function resetAllItemsToOriginal(): HeritageItem[] {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ALL_INITIAL_ITEMS));
    return ALL_INITIAL_ITEMS;
  } catch (e) {
    console.error('Error resetting all items:', e);
    return ALL_INITIAL_ITEMS;
  }
}

/**
 * Syncs database items from Supabase and merges them into state.
 */
export async function syncItemsFromSupabase(): Promise<{
  items: HeritageItem[];
  source: 'supabase' | 'local';
  count: number;
}> {
  try {
    const cloudItems = await fetchAllHeritageItemsFromSupabase();
    if (cloudItems && cloudItems.length > 0) {
      const local = getSavedHeritageItems();
      const cloudIds = new Set(cloudItems.map((c) => c.id));
      const localOnly = local.filter((l) => !cloudIds.has(l.id));

      const merged = [...cloudItems, ...localOnly];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return { items: merged, source: 'supabase', count: cloudItems.length };
    }
  } catch (e) {
    console.warn('Sync from Supabase fallback to local:', e);
  }

  const local = getSavedHeritageItems();
  return { items: local, source: 'local', count: local.length };
}

export function getBookmarkedIds(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(id: string): string[] {
  const current = getBookmarkedIds();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
  } catch {}
  return next;
}

export function speakText(text: string, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis not supported');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'id-ID';
  utterance.rate = 0.95;
  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Saves a user-submitted error report or academic correction suggestion
 */
export function saveErrorReport(report: ErrorReport): ErrorReport[] {
  try {
    const raw = localStorage.getItem(ERROR_REPORTS_KEY);
    const list: ErrorReport[] = raw ? JSON.parse(raw) : [];
    const updated = [report, ...list];
    localStorage.setItem(ERROR_REPORTS_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error saving error report:', e);
    return [];
  }
}

export function getSavedErrorReports(): ErrorReport[] {
  try {
    const raw = localStorage.getItem(ERROR_REPORTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export type FontSizeSetting = 'normal' | 'large' | 'larger';

export function getStoredFontSize(): FontSizeSetting {
  try {
    const stored = localStorage.getItem(FONT_SIZE_KEY);
    if (stored === 'large' || stored === 'larger' || stored === 'normal') {
      return stored;
    }
    return 'normal';
  } catch {
    return 'normal';
  }
}

export function setStoredFontSize(size: FontSizeSetting): void {
  try {
    localStorage.setItem(FONT_SIZE_KEY, size);
  } catch {}
}

export type ThemeSetting = 'dark' | 'light';

export function getStoredTheme(): ThemeSetting {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return 'dark';
  } catch {
    return 'dark';
  }
}

export function setStoredTheme(theme: ThemeSetting): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
}

const QUIZ_ANSWERED_KEY = 'warisan_digital_quiz_answered';
const QUIZ_STATS_KEY = 'warisan_digital_quiz_stats';

export function getAnsweredQuizQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(QUIZ_ANSWERED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markQuizQuestionAnswered(questionId: string): string[] {
  try {
    const current = getAnsweredQuizQuestionIds();
    if (!current.includes(questionId)) {
      const next = [...current, questionId];
      localStorage.setItem(QUIZ_ANSWERED_KEY, JSON.stringify(next));
      return next;
    }
    return current;
  } catch {
    return [];
  }
}

export function resetAnsweredQuizQuestions(sectionQuestionIds?: string[]): string[] {
  try {
    if (!sectionQuestionIds || sectionQuestionIds.length === 0) {
      localStorage.removeItem(QUIZ_ANSWERED_KEY);
      return [];
    } else {
      const current = getAnsweredQuizQuestionIds();
      const next = current.filter((id) => !sectionQuestionIds.includes(id));
      localStorage.setItem(QUIZ_ANSWERED_KEY, JSON.stringify(next));
      return next;
    }
  } catch {
    return [];
  }
}

export function getStoredQuizStats(): { answeredCount: number; correctCount: number; roundsCompleted: number } {
  try {
    const raw = localStorage.getItem(QUIZ_STATS_KEY);
    return raw ? JSON.parse(raw) : { answeredCount: 0, correctCount: 0, roundsCompleted: 0 };
  } catch {
    return { answeredCount: 0, correctCount: 0, roundsCompleted: 0 };
  }
}

export function recordQuizSession(correctInRound: number, totalInRound: number): void {
  try {
    const stats = getStoredQuizStats();
    const updated = {
      answeredCount: stats.answeredCount + totalInRound,
      correctCount: stats.correctCount + correctInRound,
      roundsCompleted: stats.roundsCompleted + 1,
    };
    localStorage.setItem(QUIZ_STATS_KEY, JSON.stringify(updated));
  } catch {}
}
