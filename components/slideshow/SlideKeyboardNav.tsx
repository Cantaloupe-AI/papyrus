"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface SlideKeyboardNavProps {
  prevHref?: string;
  nextHref?: string;
  escHref?: string;
}

export function SlideKeyboardNav({
  prevHref,
  nextHref,
  escHref,
}: SlideKeyboardNavProps) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" && prevHref) {
        router.push(prevHref);
      } else if (e.key === "ArrowRight" && nextHref) {
        router.push(nextHref);
      } else if (e.key === "Escape" && escHref) {
        router.push(escHref);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, prevHref, nextHref, escHref]);

  return null;
}
