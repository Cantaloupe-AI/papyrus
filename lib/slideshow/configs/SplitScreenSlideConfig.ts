import { SlideType } from "../types";
import { SlideConfig } from "./SlideConfig";
import type { PanelContent } from "./panels/PanelContent";

interface SplitScreenSlideOptions {
  leftPanel: PanelContent;
  rightPanel: PanelContent;
  splitRatio?: number;
  backgroundColor?: string;
  notes?: string;
}

export class SplitScreenSlideConfig extends SlideConfig {
  readonly type = SlideType.SPLIT_SCREEN as const;
  readonly leftPanel: PanelContent;
  readonly rightPanel: PanelContent;
  readonly splitRatio: number;

  constructor(options: SplitScreenSlideOptions) {
    super({ backgroundColor: options.backgroundColor, notes: options.notes });
    this.leftPanel = options.leftPanel;
    this.rightPanel = options.rightPanel;
    this.splitRatio = options.splitRatio ?? 0.5;
  }

  toJSON(): Record<string, unknown> {
    return {
      type: this.type,
      id: this.id,
      backgroundColor: this.backgroundColor,
      notes: this.notes,
      leftPanel: this.leftPanel.toJSON(),
      rightPanel: this.rightPanel.toJSON(),
      splitRatio: this.splitRatio,
    };
  }
}
