"use client";

import { useState, useEffect, useCallback } from "react";
import type { AnySlideConfig } from "@/lib/slideshow/types";
import { Slide } from "./Slide";

interface SlideshowProps {
  slides: AnySlideConfig[];
}

export function Slideshow({ slides }: SlideshowProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goBack = useCallback(() => {
    setCurrentSlideIndex((i) => Math.max(0, i - 1));
  }, []);

  const goForward = useCallback(() => {
    setCurrentSlideIndex((i) => Math.min(slides.length - 1, i + 1));
  }, [slides.length]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goBack();
      if (e.key === "ArrowRight") goForward();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goBack, goForward]);

  const isFirst = currentSlideIndex === 0;
  const isLast = currentSlideIndex === slides.length - 1;

  return (
    <div className="relative flex h-screen w-screen flex-col bg-white dark:bg-zinc-950">
      <div className="flex-1 overflow-hidden">
        <Slide config={slides[currentSlideIndex]} />
      </div>

      <div className="flex items-center justify-between border-t border-zinc-200 px-6 py-3 dark:border-zinc-800">
        <button
          onClick={goBack}
          disabled={isFirst}
          className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Back
        </button>

        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {currentSlideIndex + 1} / {slides.length}
        </span>

        <button
          onClick={goForward}
          disabled={isLast}
          className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Forward
        </button>
      </div>
    </div>
  );
}
