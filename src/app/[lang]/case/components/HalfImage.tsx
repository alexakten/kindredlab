import Image from "next/image";

interface HalfImageProps {
  leftImage: string;
  rightImage: string;
  altText: string;
}

const HalfImage: React.FC<HalfImageProps> = ({
  leftImage,
  rightImage,
  altText,
}) => {
  return (
    <section className="grid w-full max-w-8xl grid-cols-1 gap-12 sm:gap-6 sm:grid-cols-2">
      <div className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-4xl">
        <Image
          src={leftImage}
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          alt={altText}
        />
      </div>
      <div className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-4xl">
        <Image
          src={rightImage}
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          alt={altText}
        />
      </div>
    </section>
  );
};

export default HalfImage;
