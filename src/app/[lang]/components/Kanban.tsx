import Image from "next/image";

export default function Kanban({
  group,
  items,
  task1,
  task2,
  comments,
  days,
}: {
  group: string;
  items: string;
  task1: string;
  task2: string;
  comments: string;
  days: string;
}) {
  return (
    <div className="flex w-72 flex-col rounded-lg bg-sky-900 py-4 text-white">
      <div className="flex items-center gap-4 px-4 ">
        <p className="text-sm font-semibold text-sky-200">{group}</p>
        <p className="text-xs font-medium text-sky-200">{items}</p>
      </div>
      <section className="mt-4 px-2">
        <div className="w-full rounded-lg border border-sky-700 bg-zinc-800 px-4 py-4">
          <p className="font-medium">{task1}</p>
        </div>
        <div className="mt-1 w-full rounded-lg border border-sky-700 bg-zinc-800">
          <p className="px-4 py-4 font-medium">{task2}</p>
          <div className="flex items-center gap-2 border-t border-zinc-700 px-4 py-3">
            <div className="relative h-6 w-6 overflow-hidden rounded-full">
              <Image src="/images/memoji.png" alt="avatar" fill />
            </div>
            <p className="text-xs font-semibold text-sky-500">{comments}</p>
            <p className="text-xs font-regular text-white opacity-75">{days}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
