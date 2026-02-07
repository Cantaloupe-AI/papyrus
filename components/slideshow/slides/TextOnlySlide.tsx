import type { TextOnlySlideConfig } from "@/lib/slideshow/configs/TextOnlySlideConfig";
import { BulletList } from "@/components/slideshow/BulletList";
import { IconCardGrid } from "@/components/slideshow/IconCardGrid";

interface TextOnlySlideProps {
  config: TextOnlySlideConfig;
}

export function TextOnlySlide({ config }: TextOnlySlideProps) {
  return (
    <div className="flex h-full flex-col justify-center px-16">
      {config.header && (
        <h2 className="mb-4 text-5xl font-bold text-zinc-900 dark:text-zinc-50">
          {config.header}
        </h2>
      )}
      {config.subheader && (
        <h3 className="mb-6 text-3xl font-medium text-zinc-600 dark:text-zinc-400">
          {config.subheader}
        </h3>
      )}
      {config.body && (
        <p className={config.bodyWhispered ? "max-w-2xl text-lg italic text-zinc-400 dark:text-zinc-500" : "max-w-2xl text-xl leading-relaxed text-zinc-700 dark:text-zinc-300"}>
          {config.body}
        </p>
      )}
      {config.bullets && config.bullets.length > 0 && (
        <BulletList
          bullets={config.bullets}
          className="mt-6 max-w-2xl space-y-3 text-xl text-zinc-700 dark:text-zinc-300"
        />
      )}
      {config.iconCards && config.iconCards.length > 0 && (
        <IconCardGrid iconCards={config.iconCards} className="mt-8" />
      )}
    </div>
  );
}
