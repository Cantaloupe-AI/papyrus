import type { Presentation } from "../types";
import { TextOnlySlideConfig } from "../configs/TextOnlySlideConfig";
import { SplitScreenSlideConfig } from "../configs/SplitScreenSlideConfig";
import { TextPanelContent } from "../configs/panels/TextPanelContent";
import { PhotoPanelContent } from "../configs/panels/PhotoPanelContent";

export const intro: Presentation = {
  id: "intro",
  title: "Introducing Papyrus",
  description:
    "A quick overview of the declarative, composable slideshow system.",
  slides: [
    new TextOnlySlideConfig({
      header: "Welcome to Papyrus",
      subheader: "A declarative, composable slideshow system",
    }),
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "Composable by Design",
        body: "Mix and match slide types and panel content to build any presentation you can imagine.",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/globe.svg",
        alt: "Globe illustration",
        objectFit: "contain",
      }),
    }),
  ],
};
