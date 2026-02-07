import { PanelContentType } from "../../types";

export abstract class PanelContent {
  abstract readonly contentType: PanelContentType;

  abstract toJSON(): Record<string, unknown>;
}
