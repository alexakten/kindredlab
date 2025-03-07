export default function Quote({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-minion font-regular max-w-4xl text-center text-6xl leading-[1.2] tracking-tight">
        &apos;{quote}&apos;
      </h2>
      <p className="mt-4 text-center text-sm opacity-100">
        {author}
        <span className="opacity-50"> | {role}</span>
      </p>
    </div>
  );
}
