import Image from "next/image";
import type { PhotoPanelContent } from "@/lib/slideshow/configs/panels/PhotoPanelContent";

interface PhotoPanelProps {
  content: PhotoPanelContent;
}

export function PhotoPanel({ content }: PhotoPanelProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={content.src}
        alt={content.alt}
        fill
        className={content.objectFit}
      />
    </div>
  );
}
