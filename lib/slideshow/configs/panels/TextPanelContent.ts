import { PanelContentType, type TextOnlyContent } from "../../types";
import { PanelContent } from "./PanelContent";

export class TextPanelContent extends PanelContent {
  readonly contentType = PanelContentType.TEXT as const;
  readonly header?: string;
  readonly subheader?: string;
  readonly body?: string;

  constructor(options: TextOnlyContent = {}) {
    super();
    this.header = options.header;
    this.subheader = options.subheader;
    this.body = options.body;
  }

  toJSON(): Record<string, unknown> {
    return {
      contentType: this.contentType,
      header: this.header,
      subheader: this.subheader,
      body: this.body,
    };
  }
}
