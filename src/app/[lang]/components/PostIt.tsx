export default function PostIt({ message }: { message: string }) {
  return (
    <div className="flex w-48 flex-col">
      {/* <div className="h-8 w-full bg-yellow-400"></div> */}
      <div className="flex h-48 flex-col w-full items-center justify-center bg-yellow-300 px-8 shadow-xl">
        {/* <p className="font-marydale">Important!</p> */}
        <p className="font-marydale text-center text-xl">{message}</p>
      </div>
    </div>
  );
}
