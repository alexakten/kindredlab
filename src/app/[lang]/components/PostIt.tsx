export default function PostIt({ message, color }: { message: string, color: string }) {
  return (
    <div className="flex w-48 flex-col">
      {/* <div className="h-8 w-full bg-yellow-400"></div> */}
      <div className={`flex h-48 flex-col w-full items-center justify-center ${color} px-4 shadow-xl`}>
        {/* <p className="font-marydale">Important!</p> */}
        <p className="font-marydale text-center text-xl">{message}</p>
      </div>
    </div>
  );
}
