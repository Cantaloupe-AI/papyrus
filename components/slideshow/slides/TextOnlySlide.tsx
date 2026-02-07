import type { TextOnlySlideConfig } from "@/lib/slideshow/configs/TextOnlySlideConfig";

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
        <p className="max-w-2xl text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          {config.body}
        </p>
      )}
    </div>
  );
}
