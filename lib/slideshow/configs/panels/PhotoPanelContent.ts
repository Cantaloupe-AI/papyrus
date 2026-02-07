import { PanelContentType } from "../../types";
import { PanelContent } from "./PanelContent";

type ObjectFit = "object-contain" | "object-cover" | "object-fill" | "object-none" | "object-scale-down";

interface PhotoPanelOptions {
  src: string;
  alt: string;
  objectFit?: ObjectFit;
}

export class PhotoPanelContent extends PanelContent {
  readonly contentType = PanelContentType.PHOTO as const;
  readonly src: string;
  readonly alt: string;
  readonly objectFit: ObjectFit;

  constructor(options: PhotoPanelOptions) {
    super();
    this.src = options.src;
    this.alt = options.alt;
    this.objectFit = options.objectFit ?? "object-contain";
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
