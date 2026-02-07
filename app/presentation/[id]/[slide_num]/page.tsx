import Link from "next/link";
import { notFound } from "next/navigation";
import { presentations } from "@/lib/slideshow/presentations";
import { Slide } from "@/components/slideshow";
import { SlideKeyboardNav } from "@/components/slideshow/SlideKeyboardNav";

interface PageProps {
  params: Promise<{ id: string; slide_num: string }>;
}

export function generateStaticParams() {
  return presentations.flatMap((p) =>
    p.slides.map((_, i) => ({
      id: p.id,
      slide_num: String(i + 1),
    }))
  );
}

export default async function PresentationSlidePage({ params }: PageProps) {
  const { id, slide_num } = await params;

  const presentation = presentations.find((p) => p.id === id);
  if (!presentation) notFound();

  const slideIndex = Number(slide_num) - 1;
  if (
    !Number.isInteger(slideIndex) ||
    slideIndex < 0 ||
    slideIndex >= presentation.slides.length
  ) {
    notFound();
  }

  const slideConfig = presentation.slides[slideIndex];
  const total = presentation.slides.length;
  const isFirst = slideIndex === 0;
  const isLast = slideIndex === total - 1;

  const prevHref = isFirst
    ? undefined
    : `/presentation/${id}/${slideIndex}`;
  const nextHref = isLast
    ? undefined
    : `/presentation/${id}/${slideIndex + 2}`;

  return (
    <div className="relative flex h-screen w-screen flex-col bg-white dark:bg-zinc-950">
      <Link
        href="/"
        className="absolute left-4 top-4 z-10 rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
      >
        &larr; All Presentations
      </Link>

      <div className="flex-1 overflow-hidden">
        <Slide config={slideConfig} />
      </div>

      <nav className="flex items-center justify-between border-t border-zinc-200 px-6 py-3 dark:border-zinc-800">
        {prevHref ? (
          <Link
            href={prevHref}
            className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Back
          </Link>
        ) : (
          <span className="cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-zinc-700 opacity-40 dark:text-zinc-300">
            Back
          </span>
        )}

        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {slideIndex + 1} / {total}
        </span>

        {nextHref ? (
          <Link
            href={nextHref}
            className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Forward
          </Link>
        ) : (
          <span className="cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium text-zinc-700 opacity-40 dark:text-zinc-300">
            Forward
          </span>
        )}
      </nav>

      <SlideKeyboardNav
        prevHref={prevHref}
        nextHref={nextHref}
        escHref="/"
      />
    </div>
  );
}
