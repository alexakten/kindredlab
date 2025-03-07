import React from "react";
import Image from "next/image";
interface IntroProps {
  image: string;
  description: string;
  quote: string;
  tags: Array<{ title: string; text: string | string[] }>;
}

export default function Intro({ image, description, quote, tags }: IntroProps) {
  return (
    <section className="mt-32 flex w-full flex-col items-center">
      <h2 className="font-regular max-w-3xl text-center text-5xl leading-[1.2] tracking-tight">
        {description}
      </h2>
      <div className="mt-16 flex w-full max-w-4xl items-center justify-center gap-16 rounded-3xl border px-32 py-5">
        {tags.map((tag, index) => (
          <div
            className="flex flex-col items-center justify-center text-center"
            key={index}
          >
            <p className="font-regular font-medium">{tag.title}</p>
            {/** Ensure text is processed correctly whether it is a string or an array */}
            {(Array.isArray(tag.text) ? tag.text : tag.text.split("\n")).map(
              (line, lineIndex, arr) => (
                <React.Fragment key={lineIndex}>
                  <span className="opacity-50">{line}</span>
                  {lineIndex < arr.length - 1 && <br />}
                </React.Fragment>
              ),
            )}
          </div>
        ))}
      </div>
      <div className="mt-16 flex w-full flex-col px-8">
        <div className="rounded-4xl relative aspect-[16/9] h-full w-full overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt=""
            layout="fill"
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
