import Link from "next/link";
import { presentations } from "@/lib/slideshow/presentations";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-8 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Papyrus
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {presentations.map((p) => (
            <Link
              key={p.id}
              href={`/presentation/${p.id}/1`}
              className="rounded-lg border border-zinc-200 p-6 text-left transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {p.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
