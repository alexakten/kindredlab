export default function Paragraph({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="flex w-full">
      <div className="col-span-1 flex max-w-lg flex-col ">
        <p className="mt-8 whitespace-pre-line border-b border-zinc-300 pb-2 font-[450] leading-[1.6]">
          {title}
        </p>
        <p className="mt-6 whitespace-pre-line font-[450] leading-[1.6] opacity-50">
          {text}
        </p>
      </div>
    </div>
  )
}
