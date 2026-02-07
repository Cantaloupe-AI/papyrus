import { icons } from "lucide-react";
import type { IconCard } from "@/lib/slideshow/types";

interface IconCardGridProps {
  iconCards: IconCard[];
  className?: string;
}

function gridCols(count: number): string {
  if (count === 1) return "grid-cols-1 max-w-xs mx-auto";
  if (count === 2) return "grid-cols-2";
  if (count === 4) return "grid-cols-2";
  return "grid-cols-3";
}

export function IconCardGrid({ iconCards, className = "" }: IconCardGridProps) {
  const cards = iconCards.slice(0, 6);
  if (cards.length === 0) return null;

  return (
    <div className={`grid gap-6 ${gridCols(cards.length)} ${className}`}>
      {cards.map((card, i) => {
        const Icon = icons[card.icon as keyof typeof icons];
        return (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            {Icon && <Icon className="size-11 text-zinc-700 dark:text-zinc-300" />}
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{card.header}</h4>
            {card.body && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{card.body}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
