import type { Presentation } from "../types";
import { intro } from "./intro";
import { design } from "./design";
import { tulum } from "./tulum";
import { kitchenSink } from "./kitchen-sink";

export const presentations: Presentation[] = [intro, design, tulum, kitchenSink];
