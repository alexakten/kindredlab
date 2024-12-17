export default function CalendarEvent({
  event,
  location,
  time,
}: {
  event: string;
  location: string;
  time: string;
}) {
  return (
    <div className="flex w-64 md:w-80 shadow-lg gap-1 rounded-md bg-green-800 px-1 py-1.5">
      <div className="w-1 rounded-full bg-lime-300"></div>
      <div>
        <p className="text-xs font-bold text-lime-300">{event}</p>
        <p className="text-xs text-lime-400">{location}</p>
        <p className="text-xs text-lime-400">{time}</p>
      </div>
    </div>
  );
}
