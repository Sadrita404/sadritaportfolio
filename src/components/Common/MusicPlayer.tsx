"use client"
import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Start playback muted to satisfy modern autoplay policies.
    audio.muted = true;
    audio.loop = true;

    audio.play().then(() => {
      setIsPlaying(true);
      setIsMuted(true);
    }).catch(() => {
      setIsPlaying(false);
    });
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.muted = false;
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => {
        setIsPlaying(false);
      });
      return;
    }

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/websitemusic.mp3" preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-black/70"
        aria-label={isPlaying && !isMuted ? "Mute music" : "Play music"}
        title={isPlaying && !isMuted ? "Mute music" : "Play music"}
      >
        {isPlaying && !isMuted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M3 10v4h4l5 5V5L7 10H3z" fill="currentColor" />
            <path d="M16.5 12c0-1.77-.77-3.37-2-4.47v8.94c1.23-1.1 2-2.7 2-4.47z" fill="currentColor" />
            <path d="M18.5 12c0 2.89-1.64 5.38-4.06 6.71l-1.22-1.58c1.78-1.17 2.88-3.2 2.88-5.13s-1.1-3.97-2.88-5.13l1.22-1.58C16.86 6.62 18.5 9.11 18.5 12z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" />
          </svg>
        )}
        <span>MUSIC</span>
      </button>
    </>
  );
}