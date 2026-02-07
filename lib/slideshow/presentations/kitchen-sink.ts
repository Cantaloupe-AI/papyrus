import { BulletStyle, type Presentation } from "../types";
import { TextOnlySlideConfig } from "../configs/TextOnlySlideConfig";
import { SplitScreenSlideConfig } from "../configs/SplitScreenSlideConfig";
import { TextPanelContent } from "../configs/panels/TextPanelContent";
import { PhotoPanelContent } from "../configs/panels/PhotoPanelContent";

export const kitchenSink: Presentation = {
  id: "kitchen-sink",
  title: "Kitchen Sink",
  description: "Every configuration type in one presentation.",
  slides: [
    // 1. Title slide
    new TextOnlySlideConfig({
      header: "Kitchen Sink",
      subheader: "A visual reference of every slide configuration",
    }),

    // 2. Body text
    new TextOnlySlideConfig({
      header: "Body Text",
      body: "This slide demonstrates plain body text. It can hold a paragraph of content that explains a concept, tells a story, or provides context for the audience.",
    }),

    // 3. Whispered body
    new TextOnlySlideConfig({
      header: "Whispered Body",
      body: "This text is rendered in a softer, more subtle style — useful for asides, attributions, or secondary context.",
      bodyWhispered: true,
    }),

    // 4. Default bullets
    new TextOnlySlideConfig({
      header: "Default Bullets",
      bullets: [
        { text: "First point with default disc style" },
        { text: "Second point follows naturally" },
        { text: "Third point wraps up the list" },
      ],
    }),

    // 5. Emoji bullets
    new TextOnlySlideConfig({
      header: "Emoji Bullets",
      bullets: [
        { text: "Celebrate the wins", style: BulletStyle.EMOJI, emoji: "🎉" },
        { text: "Ship with confidence", style: BulletStyle.EMOJI, emoji: "🚀" },
        { text: "Keep it simple", style: BulletStyle.EMOJI, emoji: "✨" },
      ],
    }),

    // 6. Lucide bullets
    new TextOnlySlideConfig({
      header: "Lucide Icon Bullets",
      bullets: [
        { text: "Check your progress", style: BulletStyle.LUCIDE, icon: "CircleCheck" },
        { text: "Stay on target", style: BulletStyle.LUCIDE, icon: "Target" },
        { text: "Measure what matters", style: BulletStyle.LUCIDE, icon: "ChartLine" },
      ],
    }),

    // 7. Icon Cards
    new TextOnlySlideConfig({
      header: "Icon Cards",
      iconCards: [
        { icon: "Globe", header: "Global Reach", body: "Deploy to any region" },
        { icon: "Zap", header: "Lightning Fast", body: "Sub-second response times" },
        { icon: "Shield", header: "Secure", body: "End-to-end encryption" },
        { icon: "Palette", header: "Themeable", body: "Customize every detail" },
      ],
    }),

    // 8. Split screen: text + photo
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "Text + Photo",
        body: "A split screen with text on the left and an image on the right — the most common layout for storytelling.",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/tropical street.jpg",
        alt: "Tropical street in Tulum",
      }),
    }),

    // 9. Split screen: photo + photo
    new SplitScreenSlideConfig({
      leftPanel: new PhotoPanelContent({
        src: "/tulum/iguana.jpg",
        alt: "Iguana in Tulum",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/beach panorama.jpg",
        alt: "Beach panorama",
      }),
    }),

    // 10. Split screen: text + text
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "Left Panel",
        body: "Two text panels side by side for comparisons, pros/cons, or before/after content.",
      }),
      rightPanel: new TextPanelContent({
        header: "Right Panel",
        body: "Each panel independently supports headers, subheaders, body text, bullets, and icon cards.",
      }),
    }),

    // 11. Split screen: custom ratio
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "Custom Split Ratio",
        subheader: "70 / 30",
        body: "This panel takes 70% of the width, giving more room for detailed content while keeping a narrow companion panel.",
      }),
      rightPanel: new TextPanelContent({
        body: "Narrow side panel for supplementary info.",
        bodyWhispered: true,
      }),
      splitRatio: 0.7,
    }),

    // 12. Split screen: icon cards in panel
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "Icon Cards in Panel",
        subheader: "Works in split screens too",
      }),
      rightPanel: new TextPanelContent({
        iconCards: [
          { icon: "Cpu", header: "Compute" },
          { icon: "Database", header: "Storage" },
          { icon: "Wifi", header: "Network" },
          { icon: "Lock", header: "Security" },
        ],
      }),
    }),
  ],
};
