import React from 'react'
import Image from 'next/image'
interface IntroProps {
  client: string
  image: string
  description: [string, string]
  tags: Array<{ title: string; text: string | string[] }>
}

export default function Intro({
  client,
  image,
  description,
  tags,
}: IntroProps) {
  return (
    <section className="mt-32 w-full">
      <div className="flex w-full flex-col">
        <div className="relative h-screen w-full overflow-hidden rounded-md">
          <Image
            src={image}
            alt="Hero"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div data-bottom-wrapper className="mt-8 w-full flex-col">
          <h2 className="max-w-4xl font-freight text-5xl font-light leading-[1.2] tracking-tight">
            {description[0]}{' '}
            <span className="opacity-50">{description[1]}</span>
          </h2>

          <div data-tags className="mt-24 grid grid-cols-2">
            <div className="col-span-1 flex w-full gap-16">
              {tags.map((tag, index) => (
                <div key={index}>
                  <p>{tag.title}</p>
                  {/** Ensure text is processed correctly whether it is a string or an array */}
                  {(Array.isArray(tag.text)
                    ? tag.text
                    : tag.text.split('\n')
                  ).map((line, lineIndex, arr) => (
                    <React.Fragment key={lineIndex}>
                      <span className="opacity-60">{line}</span>
                      {lineIndex < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
