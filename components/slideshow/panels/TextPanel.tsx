import type { TextPanelContent } from "@/lib/slideshow/configs/panels/TextPanelContent";
import { BulletList } from "@/components/slideshow/BulletList";
import { IconCardGrid } from "@/components/slideshow/IconCardGrid";

interface TextPanelProps {
  content: TextPanelContent;
}

export function TextPanel({ content }: TextPanelProps) {
  return (
    <div className="flex h-full flex-col justify-center px-12">
      {content.header && (
        <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          {content.header}
        </h2>
      )}
      {content.subheader && (
        <h3 className="mb-4 text-2xl font-medium text-zinc-600 dark:text-zinc-400">
          {content.subheader}
        </h3>
      )}
      {content.body && (
        <p className={content.bodyWhispered ? "text-base italic text-zinc-400 dark:text-zinc-500" : "text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"}>
          {content.body}
        </p>
      )}
      {content.bullets && content.bullets.length > 0 && (
        <BulletList
          bullets={content.bullets}
          className="mt-4 space-y-2 text-lg text-zinc-700 dark:text-zinc-300"
        />
      )}
      {content.iconCards && content.iconCards.length > 0 && (
        <IconCardGrid iconCards={content.iconCards} className="mt-6" />
      )}
    </div>
  );
}
