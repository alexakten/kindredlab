import Image from "next/image";

export default function FullWidthImage({ image }: { image: string }) {
  return (
    <div className="flex w-full max-w-8xl flex-col">
      <div className="relative aspect-[16/9] h-full w-full overflow-hidden rounded-lg bg-neutral-100 sm:rounded-2xl md:rounded-3xl lg:rounded-4xl">
        <Image
          src={image}
          alt=""
          layout="fill"
          className="object-cover"
          priority={true}
        />
      </div>
    </div>
  );
}
