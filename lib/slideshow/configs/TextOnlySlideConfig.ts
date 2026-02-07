import { SlideType, type BulletPoint, type IconCard, type TextOnlyContent } from "../types";
import { SlideConfig } from "./SlideConfig";

interface TextOnlySlideOptions extends TextOnlyContent {
  backgroundColor?: string;
  notes?: string;
}

export class TextOnlySlideConfig extends SlideConfig {
  readonly type = SlideType.TEXT_ONLY as const;
  readonly header?: string;
  readonly subheader?: string;
  readonly body?: string;
  readonly bodyWhispered?: boolean;
  readonly bullets?: BulletPoint[];
  readonly iconCards?: IconCard[];

  constructor(options: TextOnlySlideOptions = {}) {
    super({ backgroundColor: options.backgroundColor, notes: options.notes });
    this.header = options.header;
    this.subheader = options.subheader;
    this.body = options.body;
    this.bodyWhispered = options.bodyWhispered;
    this.bullets = options.bullets;
    this.iconCards = options.iconCards;
  }

  toJSON(): Record<string, unknown> {
    return {
      type: this.type,
      id: this.id,
      backgroundColor: this.backgroundColor,
      notes: this.notes,
      header: this.header,
      subheader: this.subheader,
      body: this.body,
      bullets: this.bullets,
      iconCards: this.iconCards,
    };
  }
}
