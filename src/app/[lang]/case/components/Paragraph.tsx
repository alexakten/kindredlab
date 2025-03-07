export default function Paragraph({
  blackTitle,
  grayTitle,
  text,
}: {
  blackTitle?: string
  grayTitle?: string
  text: string
}) {
  return (
    <div className="col-span-1 flex max-w-lg flex-col ">
      <p className="font-freight text-4xl">{blackTitle}</p>
      <p className="font-freight text-4xl opacity-50">{grayTitle}</p>
      <p className="mt-8 whitespace-pre-line font-[450] leading-[1.6] opacity-50">
        {text}
      </p>
    </div>
  )
}
