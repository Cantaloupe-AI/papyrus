import type { SplitScreenSlideConfig } from "@/lib/slideshow/configs/SplitScreenSlideConfig";
import { PanelRenderer } from "../panels/PanelRenderer";
import type { AnyPanelContent } from "@/lib/slideshow/types";

interface SplitScreenSlideProps {
  config: SplitScreenSlideConfig;
}

export function SplitScreenSlide({ config }: SplitScreenSlideProps) {
  const leftPercent = config.splitRatio * 100;
  const rightPercent = 100 - leftPercent;

  return (
    <div className="flex h-full w-full flex-row">
      <div style={{ width: `${leftPercent}%` }} className="h-full">
        <PanelRenderer content={config.leftPanel as AnyPanelContent} />
      </div>
      <div style={{ width: `${rightPercent}%` }} className="h-full">
        <PanelRenderer content={config.rightPanel as AnyPanelContent} />
      </div>
    </div>
  );
}
