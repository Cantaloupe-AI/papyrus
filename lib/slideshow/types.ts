import type { TextOnlySlideConfig } from "./configs/TextOnlySlideConfig";
import type { SplitScreenSlideConfig } from "./configs/SplitScreenSlideConfig";
import type { TextPanelContent } from "./configs/panels/TextPanelContent";
import type { PhotoPanelContent } from "./configs/panels/PhotoPanelContent";

export enum SlideType {
  TEXT_ONLY = "TEXT_ONLY",
  SPLIT_SCREEN = "SPLIT_SCREEN",
}

export enum PanelContentType {
  TEXT = "TEXT",
  PHOTO = "PHOTO",
}

export interface BulletPoint {
  text: string;
  emoji?: string;
}

export interface TextOnlyContent {
  header?: string;
  subheader?: string;
  body?: string;
  bodyWhispered?: boolean;
  bullets?: BulletPoint[];
}

export type AnySlideConfig = TextOnlySlideConfig | SplitScreenSlideConfig;

export type AnyPanelContent = TextPanelContent | PhotoPanelContent;

export interface Presentation {
  id: string;
  title: string;
  description: string;
  slides: AnySlideConfig[];
}
