import { PanelContentType } from "@/lib/slideshow/types";
import type { AnyPanelContent } from "@/lib/slideshow/types";
import { TextPanel } from "./TextPanel";
import { PhotoPanel } from "./PhotoPanel";

interface PanelRendererProps {
  content: AnyPanelContent;
}

export function PanelRenderer({ content }: PanelRendererProps) {
  switch (content.contentType) {
    case PanelContentType.TEXT:
      return <TextPanel content={content} />;
    case PanelContentType.PHOTO:
      return <PhotoPanel content={content} />;
    default: {
      const _exhaustive: never = content;
      return _exhaustive;
    }
  }
}
