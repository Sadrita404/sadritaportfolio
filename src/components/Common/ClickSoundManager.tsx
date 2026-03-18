"use client"
import { useEffect, useRef } from 'react';

export function ClickSoundManager() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for click sound
    const audio = new Audio('/mouse.mp3');
    audio.volume = 0.3; // Set volume to 30%
    audioRef.current = audio;

    // Add click listener to all buttons and interactive elements
    const handleButtonClick = (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Play sound for buttons, links, and other interactive elements
      if (target.closest('button') || target.closest('a') || target.closest('[role="button"]')) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {
            // Silently fail if audio can't play
          });
        }
      }
    };

    // Use capture phase to ensure we catch all clicks
    document.addEventListener('click', handleButtonClick, true);

    return () => {
      document.removeEventListener('click', handleButtonClick, true);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
}
