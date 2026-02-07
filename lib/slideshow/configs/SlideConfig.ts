import { SlideType } from "../types";

let nextId = 1;

export abstract class SlideConfig {
  abstract readonly type: SlideType;
  readonly id: string;
  readonly backgroundColor?: string;
  readonly notes?: string;

  constructor(options: { backgroundColor?: string; notes?: string } = {}) {
    this.id = `slide-${nextId++}`;
    this.backgroundColor = options.backgroundColor;
    this.notes = options.notes;
  }

  abstract toJSON(): Record<string, unknown>;
}
