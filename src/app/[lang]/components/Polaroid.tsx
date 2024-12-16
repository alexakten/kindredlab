import Image from "next/image";

export default function Polaroid({ image }: { image: string }) {
  return (
    <div className="h-auto w-64 shadow-xl bg-white pt-4 pb-12 px-4">
      <Image src={image} alt="Polaroid" width={1440} height={900} />
    </div>
  );
}
