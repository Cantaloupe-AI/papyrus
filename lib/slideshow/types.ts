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

export enum BulletStyle {
  DEFAULT = "DEFAULT",
  EMOJI = "EMOJI",
  LUCIDE = "LUCIDE",
}

export type BulletPoint =
  | { text: string; style?: BulletStyle.DEFAULT }
  | { text: string; style: BulletStyle.EMOJI; emoji: string }
  | { text: string; style: BulletStyle.LUCIDE; icon: string }

export interface IconCard {
  icon: string;
  header: string;
  body?: string;
}

export interface TextOnlyContent {
  header?: string;
  subheader?: string;
  body?: string;
  bodyWhispered?: boolean;
  bullets?: BulletPoint[];
  iconCards?: IconCard[];
}

export type AnySlideConfig = TextOnlySlideConfig | SplitScreenSlideConfig;

export type AnyPanelContent = TextPanelContent | PhotoPanelContent;

export interface Presentation {
  id: string;
  title: string;
  description: string;
  slides: AnySlideConfig[];
}
