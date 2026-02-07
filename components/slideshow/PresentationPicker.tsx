"use client";

import { useState, useEffect, useCallback } from "react";
import type { Presentation } from "@/lib/slideshow/types";
import { Slideshow } from "./Slideshow";

interface PresentationPickerProps {
  presentations: Presentation[];
}

export function PresentationPicker({
  presentations,
}: PresentationPickerProps) {
  const [selected, setSelected] = useState<Presentation | null>(null);

  const backToPicker = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") backToPicker();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, backToPicker]);

  if (selected) {
    return (
      <div className="relative h-screen w-screen">
        <button
          onClick={backToPicker}
          className="absolute left-4 top-4 z-10 rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          &larr; All Presentations
        </button>
        <Slideshow slides={selected.slides} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-8 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Papyrus
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {presentations.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="rounded-lg border border-zinc-200 p-6 text-left transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {p.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {p.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
