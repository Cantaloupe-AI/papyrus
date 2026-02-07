import { BulletStyle, type Presentation } from "../types";
import { SplitScreenSlideConfig } from "../configs/SplitScreenSlideConfig";
import { TextOnlySlideConfig } from "../configs/TextOnlySlideConfig";
import { TextPanelContent } from "../configs/panels/TextPanelContent";
import { PhotoPanelContent } from "../configs/panels/PhotoPanelContent";

export const tulum: Presentation = {
  id: "tulum",
  title: "Tulum Trip",
  description: "My dastardly plot to move out of the country.",
  slides: [
    // 1. My Dastardly Plot
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "My Dastardly Plot",
        body: "How can we all affordably move out of the country if it keeps going to shit?",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/pinky and the brain.jpeg",
        alt: "Pinky and the Brain",
      }),
    }),

    // 2. Escape the cheeto
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "Escape the Cheeto",
        subheader: "And late stage capitalism",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/no cheeto.webp",
        alt: "No cheeto",
      }),
    }),

    // 3. Why look in Latin America?
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        subheader: "Why look in Latin America?",
        bullets: [
          { text: "Affordable cost of living", style: BulletStyle.EMOJI, emoji: "💰" },
          { text: "Mountains, beaches and nature", style: BulletStyle.EMOJI, emoji: "🏖️" },
          { text: "Rich culture and food", style: BulletStyle.EMOJI, emoji: "🌮" },
          {
            text: "More stable than the US (depending on the country)",
            style: BulletStyle.EMOJI,
            emoji: "🏛️",
          },
          { text: "Relatively quick flight back home", style: BulletStyle.EMOJI, emoji: "✈️" },
        ],
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/plane.jpg",
        alt: "Airplane",
      }),
    }),

    // 4. Beautiful nature
    new SplitScreenSlideConfig({
      leftPanel: new PhotoPanelContent({
        src: "/tulum/beach panorama.jpg",
        alt: "Beach panorama",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/iguana.jpg",
        alt: "Iguana",
      }),
    }),

    // 5. Amazing food
    new SplitScreenSlideConfig({
      leftPanel: new PhotoPanelContent({
        src: "/tulum/leaf wrapped buritto.jpg",
        alt: "Leaf wrapped burrito",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/taco meat roasting.jpg",
        alt: "Taco meat roasting",
      }),
    }),

    // 6. Mexico today, Colombia tomorrow
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        header: "Mexico Today",
        subheader: "Colombia Tomorrow",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/mexican flag.jpg",
        alt: "Mexican flag",
      }),
    }),

    // 7. Highly affordable and modern areas
    new SplitScreenSlideConfig({
      leftPanel: new TextPanelContent({
        subheader: "Affordable & Modern",
        bullets: [
          {
            text: "Some of the Americas' finest cities are in Latin America, like CDMX/Mexico City (pop. ~22.8M) and Medell\u00edn — the city of eternal spring and a major hub in Colombia",
            style: BulletStyle.EMOJI,
            emoji: "🏙️",
          },
          { text: "World-class restaurants and nightlife", style: BulletStyle.EMOJI, emoji: "🍽️" },
          { text: "Fast, reliable internet and coworking spaces", style: BulletStyle.EMOJI, emoji: "💻" },
          { text: "Modern transit systems and infrastructure", style: BulletStyle.EMOJI, emoji: "🚇" },
        ],
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/coffee shop modern.jpg",
        alt: "Modern coffee shop",
      }),
    }),

    // 8. Cost of living is low
    new TextOnlySlideConfig({
      header: "Cost of Living is Low",
      subheader: "Average monthly income (GDP per capita / 12)",
      bullets: [
        { text: "Mexico — $1,259/mo", style: BulletStyle.EMOJI, emoji: "🇲🇽" },
        { text: "Colombia — $720/mo", style: BulletStyle.EMOJI, emoji: "🇨🇴" },
        { text: "Guatemala — $571/mo", style: BulletStyle.EMOJI, emoji: "🇬🇹" },
        { text: "Bolivia — $382/mo", style: BulletStyle.EMOJI, emoji: "🇧🇴" },
      ],
    }),

    // 9. Me on a beach
    new SplitScreenSlideConfig({
      leftPanel: new PhotoPanelContent({
        src: "/tulum/me on beach.jpg",
        alt: "Me on a beach",
      }),
      rightPanel: new TextPanelContent({
        header: "Join the Dark Side",
        body: "(we have tacos 🌮)",
        bodyWhispered: true,
      }),
      splitRatio: 0.7,
    }),
  ],
};
