import { PanelContentType, type BulletPoint, type TextOnlyContent } from "../../types";
import { PanelContent } from "./PanelContent";

export class TextPanelContent extends PanelContent {
  readonly contentType = PanelContentType.TEXT as const;
  readonly header?: string;
  readonly subheader?: string;
  readonly body?: string;
  readonly bodyWhispered?: boolean;
  readonly bullets?: BulletPoint[];

  constructor(options: TextOnlyContent = {}) {
    super();
    this.header = options.header;
    this.subheader = options.subheader;
    this.body = options.body;
    this.bodyWhispered = options.bodyWhispered;
    this.bullets = options.bullets;
  }

  toJSON(): Record<string, unknown> {
    return {
      contentType: this.contentType,
      header: this.header,
      subheader: this.subheader,
      body: this.body,
      bullets: this.bullets,
    };
  }
}
