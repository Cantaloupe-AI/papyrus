import type { TextPanelContent } from "@/lib/slideshow/configs/panels/TextPanelContent";

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
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {content.body}
        </p>
      )}
    </div>
  );
}
