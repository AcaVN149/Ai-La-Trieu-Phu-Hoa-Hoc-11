/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AUDIO_URLS } from "../types";

class AudioService {
  private static instance: AudioService;
  private audioMap: Map<string, HTMLAudioElement> = new Map();
  private isMuted: boolean = false;

  private constructor() {}

  public static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService();
    }
    return AudioService.instance;
  }

  public preload() {
    Object.entries(AUDIO_URLS).forEach(([key, url]) => {
      const audio = new Audio(url as string);
      audio.preload = 'auto';
      if (key === 'BACKGROUND') {
        audio.loop = true;
        audio.volume = 0.3;
      }
      this.audioMap.set(key, audio);
    });
  }

  public play(key: keyof typeof AUDIO_URLS) {
    if (this.isMuted) return;
    const audio = this.audioMap.get(key as string);
    if (audio) {
      // For non-background, restart if already playing
      if (key !== 'BACKGROUND') {
        audio.currentTime = 0;
      }
      audio.play().catch(e => console.warn("Audio play failed:", e));
    }
  }

  public stop(key: keyof typeof AUDIO_URLS) {
    const audio = this.audioMap.get(key as string);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    this.audioMap.forEach(audio => {
      audio.muted = this.isMuted;
    });
    return this.isMuted;
  }

  public async playIntroMelody() {
    if (this.isMuted) return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playComplexNote = (freq: number, startTime: number, duration: number, type: OscillatorType = 'triangle') => {
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2.01, startTime); // Harmonic
      
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.4, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
      
      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc2.start(startTime);
      osc.stop(startTime + duration);
      osc2.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    // Orchestral hit simulation
    playComplexNote(523.25, now, 0.6, 'sawtooth');      // C5
    playComplexNote(659.25, now + 0.15, 0.6, 'sawtooth'); // E5
    playComplexNote(783.99, now + 0.3, 0.6, 'sawtooth'); // G5
    playComplexNote(1046.50, now + 0.45, 1.2, 'sawtooth');// C6
    
    // Low bass reinforcement
    playComplexNote(130.81, now, 1.5, 'sine'); // Low C3

    setTimeout(() => ctx.close(), 3000);
  }

  public async playWhoosh() {
    if (this.isMuted) return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.5);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
    
    setTimeout(() => ctx.close(), 1000);
  }

  public async playTing() {
    if (this.isMuted) return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(2000, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
    
    setTimeout(() => ctx.close(), 500);
  }

  public async play5050() {
    if (this.isMuted) return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a double "click" or "táp" sound
    const playClick = (time: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(800, time);
      osc.frequency.exponentialRampToValueAtTime(100, time + 0.1);
      gain.gain.setValueAtTime(0.1, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 0.1);
    };

    const now = ctx.currentTime;
    playClick(now);
    playClick(now + 0.15);
    
    setTimeout(() => ctx.close(), 1000);
  }
}

export const audioService = AudioService.getInstance();
