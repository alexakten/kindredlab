import Image from "next/image";

export default function SlackMessage({
  channel,
  author,
  messageParts,
  date,
}: {
  channel: string;
  author: string;
  messageParts: { text: string; highlight: boolean }[];
  date: string;
}) {
  return (
    <aside className="max-w-72 rounded-xl bg-white p-3 shadow-sm">
      <p className="text-xs font-bold">{channel}</p>
      <div className="mt-2 flex gap-2">
        <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-md">
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={100}
            height={100}
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <p className="text-xs font-bold">{author}</p>
            <p className="text-[8px] opacity-50">{date}</p>
          </div>
          <p className="text-xs font-[450]">
            {messageParts.map((part, index) => (
              <span
                key={index}
                className={
                  part.highlight
                    ? "rounded-sm bg-blue-100/40 px-0.5 font-[450] text-blue-500"
                    : ""
                }
              >
                {part.text}
              </span>
            ))}
          </p>
        </div>
      </div>
    </aside>
  );
}
