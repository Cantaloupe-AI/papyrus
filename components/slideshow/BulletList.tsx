import { icons } from "lucide-react";
import { BulletStyle, type BulletPoint } from "@/lib/slideshow/types";

interface BulletListProps {
  bullets: BulletPoint[];
  className?: string;
}

function hasCustomMarker(bullet: BulletPoint): boolean {
  if (!bullet.style || bullet.style === BulletStyle.DEFAULT) return false;
  return true;
}

export function BulletList({ bullets, className = "" }: BulletListProps) {
  const allCustom = bullets.every(hasCustomMarker);

  return (
    <ul className={`${allCustom ? "list-none" : "list-disc pl-6"} ${className}`}>
      {bullets.map((bullet, i) => (
        <li key={i} className={hasCustomMarker(bullet) ? "flex items-start gap-2" : ""}>
          <BulletMarker bullet={bullet} />
          <span>{bullet.text}</span>
        </li>
      ))}
    </ul>
  );
}

function BulletMarker({ bullet }: { bullet: BulletPoint }) {
  switch (bullet.style) {
    case BulletStyle.EMOJI:
      return <span className="shrink-0">{bullet.emoji}</span>;
    case BulletStyle.LUCIDE: {
      const Icon = icons[bullet.icon as keyof typeof icons];
      if (!Icon) return null;
      return <Icon className="mt-1 size-5 shrink-0" />;
    }
    default:
      return null;
  }
}
