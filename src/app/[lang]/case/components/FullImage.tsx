import Image from 'next/image'

interface FullImageProps {
  image: string
  altText: string
}

export default function FullImage({ image, altText }: FullImageProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden rounded-md">
      <Image
        className=""
        src={image}
        layout="fill"
        objectFit="cover"
        alt={altText}
      />
    </section>
  )
}
