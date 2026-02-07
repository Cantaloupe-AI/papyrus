import type { Presentation } from "../types";
import { TextOnlySlideConfig } from "../configs/TextOnlySlideConfig";

export const design: Presentation = {
  id: "design",
  title: "Design Principles",
  description:
    "The architecture and philosophy behind the Papyrus slide system.",
  slides: [
    new TextOnlySlideConfig({
      header: "Design Principles",
      subheader: "How Papyrus is built",
    }),
    new TextOnlySlideConfig({
      body: "Every slide is a plain configuration object — no JSX, no imperative logic. Renderers map each config to its visual representation, keeping data and presentation cleanly separated.",
    }),
  ],
};
