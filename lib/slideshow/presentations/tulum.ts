import type { Presentation } from "../types";
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
          { text: "Affordable cost of living", emoji: "💰" },
          { text: "Mountains, beaches and nature", emoji: "🏖️" },
          { text: "Rich culture and food", emoji: "🌮" },
          {
            text: "More stable than the US (depending on the country)",
            emoji: "🏛️",
          },
          { text: "Relatively quick flight back home", emoji: "✈️" },
        ],
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/plane.png",
        alt: "Airplane",
      }),
    }),

    // 4. Beautiful nature
    new SplitScreenSlideConfig({
      leftPanel: new PhotoPanelContent({
        src: "/tulum/beach panorama.png",
        alt: "Beach panorama",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/iguana.png",
        alt: "Iguana",
      }),
    }),

    // 5. Amazing food
    new SplitScreenSlideConfig({
      leftPanel: new PhotoPanelContent({
        src: "/tulum/leaf wrapped buritto.png",
        alt: "Leaf wrapped burrito",
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/taco meat roasting.png",
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
        src: "/tulum/mexican flag.png",
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
            emoji: "🏙️",
          },
          { text: "World-class restaurants and nightlife", emoji: "🍽️" },
          { text: "Fast, reliable internet and coworking spaces", emoji: "💻" },
          { text: "Modern transit systems and infrastructure", emoji: "🚇" },
        ],
      }),
      rightPanel: new PhotoPanelContent({
        src: "/tulum/coffee shop modern.png",
        alt: "Modern coffee shop",
      }),
    }),

    // 8. Cost of living is low
    new TextOnlySlideConfig({
      header: "Cost of Living is Low",
      subheader: "Average monthly income (GDP per capita / 12)",
      bullets: [
        { text: "Mexico — $1,259/mo", emoji: "🇲🇽" },
        { text: "Colombia — $720/mo", emoji: "🇨🇴" },
        { text: "Guatemala — $571/mo", emoji: "🇬🇹" },
        { text: "Bolivia — $382/mo", emoji: "🇧🇴" },
      ],
    }),

    // 9. Me on a beach
    new SplitScreenSlideConfig({
      leftPanel: new PhotoPanelContent({
        src: "/tulum/me on beach.png",
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
