"use client";

import { PresentationPicker } from "@/components/slideshow";
import { presentations } from "@/lib/slideshow/presentations";

export default function Home() {
  return <PresentationPicker presentations={presentations} />;
}
