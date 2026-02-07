"use client";

import { Slideshow } from "@/components/slideshow";
import { TextOnlySlideConfig } from "@/lib/slideshow/configs/TextOnlySlideConfig";
import { SplitScreenSlideConfig } from "@/lib/slideshow/configs/SplitScreenSlideConfig";
import { TextPanelContent } from "@/lib/slideshow/configs/panels/TextPanelContent";
import { PhotoPanelContent } from "@/lib/slideshow/configs/panels/PhotoPanelContent";

const slides = [
  new TextOnlySlideConfig({
    header: "Welcome to Papyrus",
    subheader: "A declarative, composable slideshow system",
  }),
  new TextOnlySlideConfig({
    body: "Papyrus lets you build presentations using simple, composable configuration objects. Each slide is a class instance that defines its content and layout.",
  }),
  new SplitScreenSlideConfig({
    leftPanel: new TextPanelContent({
      header: "Split Screen",
      subheader: "Text + Image",
      body: "Combine any panel types side by side. Text, photos, and more — all composable.",
    }),
    rightPanel: new PhotoPanelContent({
      src: "/globe.svg",
      alt: "Globe illustration",
      objectFit: "contain",
    }),
  }),
];

export default function Home() {
  return <Slideshow slides={slides} />;
}
