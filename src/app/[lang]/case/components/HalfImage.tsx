import Image from 'next/image'

interface HalfImageProps {
  leftImage: string
  rightImage: string
  altText: string
}

const HalfImage: React.FC<HalfImageProps> = ({
  leftImage,
  rightImage,
  altText,
}) => {
  return (
    <section className="grid w-full grid-cols-2 gap-6 pt-8">
      <div className="relative h-full w-full overflow-hidden rounded-md">
        <Image
          src={leftImage}
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          alt={altText}
        />
      </div>
      <div className="relative h-full w-full overflow-hidden rounded-md">
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
  )
}

export default HalfImage
