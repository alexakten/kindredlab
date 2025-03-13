import Image from "next/image";

export default function FullWidthImage({ image }: { image: string }) {
  return (
    <div className="flex w-full max-w-8xl flex-col">
      <div className="rounded-xl sm:rounded-4xl relative aspect-[16/9] h-full w-full overflow-hidden bg-neutral-100">
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
