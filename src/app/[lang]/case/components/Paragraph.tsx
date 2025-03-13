export default function Paragraph({
  blackTitle,
  grayTitle,
  text,
}: {
  blackTitle?: string;
  grayTitle?: string;
  text: string;
}) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2">
      <aside className="col-span-1"></aside>
      <div className="col-span-1 flex max-w-lg flex-col ">
        <p className="font-minion text-4xl">{blackTitle}</p>
        <p className="font-minion text-4xl opacity-50">{grayTitle}</p>
        <p className="mt-8 whitespace-pre-line font-[450] leading-[1.6] opacity-50">
          {text}
        </p>
      </div>
    </div>
  );
}
