import Image from "next/image";

export function MedicineProductVisual({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-studio lg:aspect-auto lg:min-h-[560px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-contain p-8 sm:p-12 lg:p-16"
      />
    </div>
  );
}
