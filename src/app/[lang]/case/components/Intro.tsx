import React from "react";
import Image from "next/image";
import FullWidthImage from "./FullWidthImage";
interface IntroProps {
  image: string;
  description: string;
  tags: Array<{ title: string; text: string | string[] }>;
}

export default function Intro({ image, description, tags }: IntroProps) {
  return (
    <section className="mt-20 flex w-full flex-col items-center">
      <h2 className="max-w-3xl text-center font-minion text-3xl leading-[1.2] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {description}
      </h2>
      <div className="mt-16 grid grid-cols-2 w-full max-w-4xl flex-col items-start justify-center gap-16 rounded-3xl border px-8 sm:px-32 py-5 sm:flex sm:flex-row sm:items-center">
        {tags.map((tag, index) => (
          <div
            className="flex flex-col items-start justify-center text-left sm:items-center sm:text-center"
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
      <div className="mt-16 flex w-full max-w-8xl flex-col">
        <FullWidthImage image={image} />
      </div>
    </section>
  );
}
