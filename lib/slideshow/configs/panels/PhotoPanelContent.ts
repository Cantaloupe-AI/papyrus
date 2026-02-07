import { PanelContentType } from "../../types";
import { PanelContent } from "./PanelContent";

interface PhotoPanelOptions {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
}

export class PhotoPanelContent extends PanelContent {
  readonly contentType = PanelContentType.PHOTO as const;
  readonly src: string;
  readonly alt: string;
  readonly objectFit: "cover" | "contain" | "fill" | "none";

  constructor(options: PhotoPanelOptions) {
    super();
    this.src = options.src;
    this.alt = options.alt;
    this.objectFit = options.objectFit ?? "cover";
  }

  toJSON(): Record<string, unknown> {
    return {
      contentType: this.contentType,
      src: this.src,
      alt: this.alt,
      objectFit: this.objectFit,
    };
  }
}
