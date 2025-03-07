export default function TwoColumns({
  children,
}: {
  children: [React.ReactNode, React.ReactNode]
}) {
  return (
    <div className="grid gap-6 w-full grid-cols-2">
      <div className="col-span-1 w-full">{children[0]}</div>
      <div className="col-span-1 w-full">{children[1]}</div>
    </div>
  )
}
