import { SlideType } from "@/lib/slideshow/types";
import type { AnySlideConfig } from "@/lib/slideshow/types";
import { TextOnlySlide } from "./slides/TextOnlySlide";
import { SplitScreenSlide } from "./slides/SplitScreenSlide";

interface SlideProps {
  config: AnySlideConfig;
}

export function Slide({ config }: SlideProps) {
  const content = (() => {
    switch (config.type) {
      case SlideType.TEXT_ONLY:
        return <TextOnlySlide config={config} />;
      case SlideType.SPLIT_SCREEN:
        return <SplitScreenSlide config={config} />;
      default: {
        const _exhaustive: never = config;
        return _exhaustive;
      }
    }
  })();

  return (
    <div
      className="h-full w-full"
      style={{ backgroundColor: config.backgroundColor }}
    >
      {content}
    </div>
  );
}
