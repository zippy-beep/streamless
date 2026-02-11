import Image from "next/image";

type ImageGridProps = {
  images: string[];
  alt: string;
  columns?: 2 | 3 | 4;
};

export default function ImageGrid({ images, alt, columns = 3 }: ImageGridProps) {
  if (!images || images.length === 0) return null;

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-4 ${gridCols[columns]}`}>
      {images.map((image, index) => (
        <div
          key={image}
          className="group relative aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
        >
          <Image
            src={image}
            alt={`${alt} - Image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100 / columns}vw`}
          />
          {/* Optional: Image caption overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-medium text-white">
                Screenshot {index + 1}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
