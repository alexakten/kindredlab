export default function LineText({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="grid w-full grid-cols-2">
      <aside className="col-span-1"></aside>
      <div className="col-span-1 flex max-w-lg flex-col ">
        <p className="mt-8 whitespace-pre-line border-b border-neutral-300 pb-2 font-[450] leading-[1.6]">
          {title}
        </p>
        <p className="mt-6 whitespace-pre-line font-[450] leading-[1.6] opacity-50">
          {text}
        </p>
      </div>
    </div>
  );
}
