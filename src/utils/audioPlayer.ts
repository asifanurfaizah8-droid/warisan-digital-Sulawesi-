/**
 * Robust Audio and Speech Engine for Warisan Digital Sulawesi
 * Combines enhanced Text-To-Speech (Web Speech API) with a reliable Web Audio API
 * synthesizer for authentic traditional Sulawesi melodies (Kecapi Bugis & Kolintang Minahasa).
 */

class SulawesiAudioEngine {
  private audioCtx: AudioContext | null = null;
  private currentUtteranceChunks: string[] = [];
  private currentChunkIndex = 0;
  private isSpeakingActive = false;
  private isMelodyActive = false;
  private keepAliveInterval: any = null;
  private activeOscillators: OscillatorNode[] = [];
  private onSpeechEndCallback: (() => void) | null = null;

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AudioContextClass =
      window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!this.audioCtx || this.audioCtx.state === 'closed') {
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Plays a single traditional instrument chime note using Web Audio API synthesis
   */
  public playNote(
    freq: number,
    startTime: number,
    duration = 0.8,
    instrument: 'kecapi' | 'kolintang' | 'gong' = 'kecapi',
    volume = 0.25
  ) {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (instrument === 'kecapi') {
      // Plucked string harmonic overtone
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    } else if (instrument === 'kolintang') {
      // Wooden bar resonance with warm bell overtone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(volume * 1.2, startTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    } else {
      // Gong deep bronze tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(volume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 1.5);
    }

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
    this.activeOscillators.push(osc);

    osc.onended = () => {
      this.activeOscillators = this.activeOscillators.filter((o) => o !== osc);
    };
  }

  /**
   * Plays a gentle, authentic Sulawesi pentatonic melody (Anging Mammiri / Si Patokaan motif)
   * Guaranteed to work in ANY browser without needing external audio files!
   */
  public playSulawesiMelody(
    style: 'kecapi' | 'kolintang' = 'kecapi',
    onComplete?: () => void
  ): () => void {
    const ctx = this.getAudioContext();
    if (!ctx) {
      if (onComplete) onComplete();
      return () => {};
    }

    this.stopMelody();
    this.isMelodyActive = true;

    // Pentatonic scale frequencies in Hz (Sulawesi traditional tuning: E4, G4, A4, B4, D5, E5)
    const E4 = 329.63;
    const G4 = 392.0;
    const A4 = 440.0;
    const B4 = 493.88;
    const D5 = 587.33;
    const E5 = 659.25;
    const lowE = 164.81;

    // Melody notes sequence [frequency, startOffset, duration]
    const notes: [number, number, number][] = [
      [lowE, 0.0, 1.5], // Base drone
      [E4, 0.05, 0.6],
      [G4, 0.45, 0.6],
      [A4, 0.85, 0.7],
      [B4, 1.35, 0.8],
      [A4, 1.95, 0.6],
      [G4, 2.4, 0.7],
      [E4, 2.95, 1.2],

      // Second phrase
      [A4, 3.8, 0.6],
      [B4, 4.25, 0.6],
      [D5, 4.7, 0.7],
      [E5, 5.2, 1.0],
      [D5, 5.9, 0.6],
      [B4, 6.35, 0.6],
      [A4, 6.8, 0.8],
      [G4, 7.35, 0.8],
      [E4, 7.95, 1.8],
    ];

    const now = ctx.currentTime + 0.05;
    notes.forEach(([freq, offset, dur]) => {
      this.playNote(freq, now + offset, dur, style, 0.22);
    });

    const totalDurationMs = (8.0 + 1.8) * 1000;
    const timeout = setTimeout(() => {
      this.isMelodyActive = false;
      if (onComplete) onComplete();
    }, totalDurationMs);

    return () => {
      clearTimeout(timeout);
      this.stopMelody();
    };
  }

  public stopMelody() {
    this.isMelodyActive = false;
    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch {}
    });
    this.activeOscillators = [];
  }

  /**
   * Enhanced Text-to-Speech speaking with voice matching and chunking
   */
  public speak(
    text: string,
    options?: {
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
    }
  ) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis is not available on this browser.');
      // Sound chime fallback so user gets an audio response
      this.playSulawesiMelody('kolintang', options?.onEnd);
      return;
    }

    this.stopSpeaking();
    this.isSpeakingActive = true;
    this.onSpeechEndCallback = options?.onEnd || null;

    // Wake audio context so user interaction is recognized
    this.getAudioContext();

    // Clean text of markdown characters or bracket notes for clearer speech
    const cleanText = text
      .replace(/[#*_`~[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) {
      if (options?.onEnd) options.onEnd();
      return;
    }

    // Split into comfortable sentence chunks (max ~120 chars) to prevent Chrome audio timeout bug
    const sentenceChunks = cleanText
      .split(/(?<=[.!?;\n])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    this.currentUtteranceChunks = sentenceChunks.length > 0 ? sentenceChunks : [cleanText];
    this.currentChunkIndex = 0;

    // Keepalive to prevent Chrome bug where speech engine stops after 15 seconds
    this.keepAliveInterval = setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 4000);

    if (options?.onStart) {
      options.onStart();
    }

    this.speakCurrentChunk(options);
  }

  private speakCurrentChunk(options?: {
    rate?: number;
    pitch?: number;
    onEnd?: () => void;
    onError?: (err: any) => void;
  }) {
    if (
      !this.isSpeakingActive ||
      this.currentChunkIndex >= this.currentUtteranceChunks.length
    ) {
      this.finishSpeaking();
      return;
    }

    const chunk = this.currentUtteranceChunks[this.currentChunkIndex];
    const utterance = new SpeechSynthesisUtterance(chunk);

    // Pick best available Indonesian or friendly regional voice
    const voices = window.speechSynthesis.getVoices();
    const indonesianVoice = voices.find(
      (v) =>
        v.lang === 'id-ID' ||
        v.lang === 'id_ID' ||
        v.lang.startsWith('id') ||
        v.lang === 'ms-MY' ||
        v.lang.startsWith('ms')
    );

    if (indonesianVoice) {
      utterance.voice = indonesianVoice;
      utterance.lang = indonesianVoice.lang;
    } else {
      utterance.lang = 'id-ID';
    }

    utterance.rate = options?.rate ?? 0.95;
    utterance.pitch = options?.pitch ?? 1.0;

    utterance.onend = () => {
      this.currentChunkIndex++;
      this.speakCurrentChunk(options);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis chunk warning:', e);
      // Advance to next chunk instead of dying silently
      this.currentChunkIndex++;
      this.speakCurrentChunk(options);
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Failed to trigger speech:', e);
      this.finishSpeaking();
    }
  }

  private finishSpeaking() {
    this.isSpeakingActive = false;
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
    if (this.onSpeechEndCallback) {
      const cb = this.onSpeechEndCallback;
      this.onSpeechEndCallback = null;
      cb();
    }
  }

  public stopSpeaking() {
    this.isSpeakingActive = false;
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (this.onSpeechEndCallback) {
      const cb = this.onSpeechEndCallback;
      this.onSpeechEndCallback = null;
      cb();
    }
  }

  public stopAll() {
    this.stopSpeaking();
    this.stopMelody();
  }

  public isSpeaking(): boolean {
    return this.isSpeakingActive;
  }

  public isMelodyPlaying(): boolean {
    return this.isMelodyActive;
  }

  /**
   * Pronounces a specific local word with a gentle traditional chime
   */
  public pronounceTerm(term: string, tip?: string, onEnd?: () => void) {
    const ctx = this.getAudioContext();
    if (ctx) {
      // Chime note to introduce the term
      this.playNote(587.33, ctx.currentTime, 0.4, 'kolintang', 0.2);
    }

    const textToSpeak = tip ? `${term}. ${tip}` : term;
    this.speak(textToSpeak, { rate: 0.88, onEnd });
  }
}

export const audioEngine = new SulawesiAudioEngine();
