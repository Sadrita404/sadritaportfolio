"use client"
import { useEffect, useRef, useCallback } from 'react';

export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for click sound
    const audio = new Audio('/mouse.mp3');
    audio.volume = 0.3; // Set volume to 30%
    audioRef.current = audio;

    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playClickSound = useCallback(() => {
    if (audioRef.current) {
      // Reset and play
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently fail if audio can't play
      });
    }
  }, []);

  return playClickSound;
}
