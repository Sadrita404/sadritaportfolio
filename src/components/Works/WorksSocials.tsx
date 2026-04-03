import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
  useViewModel,
  useViewModelInstanceNumber,
  useViewModelInstance,
  EventType,
} from '@rive-app/react-webgl2';
import { useEffect, useState } from 'react';

export function WorksSocials({ progressValue, behance, className, onBack }: { progressValue: number, behance?: string | null, className?: string, onBack?: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const githubUrl = "https://github.com/Sadrita404";

  const { rive, setCanvasRef, setContainerRef } = useRive({
    // Always use the no-behance animation to remove the Bē mark in the work modal.
    src: "/works_rive_nobehance.riv",
    artboard: "Artboard",
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  const viewModel = useViewModel(rive, { name: "FooterViewModel" });
  const vmi = useViewModelInstance(viewModel, { rive });
  const { value: progress, setValue: setProgress } = useViewModelInstanceNumber(
    "progress",
    vmi
  );

  useEffect(() => {
    if (rive) {
      const safeOpen = (url: string) => {
        const newWindow = window.open(url, "_blank");
        if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
          window.location.href = url;
        }
      };

      const onRiveEvent = (event: any) => {
        if (event.data.name === "backClicked") {
          if (onBack) {
            onBack();
          } else {
            window.history.back();
          }
        }

        if (event.data.name === "behanceClicked" || event.data.name === "githubClicked") {
          safeOpen(githubUrl);
        }

        if (event.data.name === "messageClicked") {
          window.location.href = '/contact';
        }
      };



      rive.on(EventType.RiveEvent, onRiveEvent);
      return () => {
        rive.off(EventType.RiveEvent, onRiveEvent);
      };
    }
  }, [rive, onBack]);

  useEffect(() => {
    setProgress(progressValue);
  }, [rive, setProgress, progressValue]);


  return (
    <div
      data-gsap="works-socials"
      className={`fixed bottom-2 left-1/2 -translate-x-1/2 z-[10] ${progressValue == 100 ? "pointer-events-auto" : "pointer-events-none"}`}
      onClick={(e) => e.stopPropagation()}
      ref={setContainerRef}
    >
      <canvas ref={setCanvasRef} />
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-black/90 border border-white/20 flex items-center justify-center hover:scale-110 transition-transform"
        onClick={(e) => e.stopPropagation()}
        title="Visit my GitHub"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12 .297a12 12 0 00-3.793 23.396c.6.111.82-.26.82-.578v-2.083c-3.334.724-4.033-1.412-4.033-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.091-.746.083-.731.083-.731 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.381 1.237-3.221-.125-.303-.537-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.77.84 1.236 1.91 1.236 3.221 0 4.61-2.802 5.625-5.473 5.922.43.369.814 1.096.814 2.209v3.279c0 .32.218.694.825.576A12 12 0 0012 .297" />
        </svg>
      </a>
    </div>
  );
}