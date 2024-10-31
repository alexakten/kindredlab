export default function TestPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-900">
      <div className="relative w-full max-w-5xl bg-red-800 p-24">
        {/* Cards Container */}
        <div
          className="absolute inset-0 overflow-x-auto"
          style={{ zIndex: 10 }}
        >
          <div className="flex gap-4 px-24">
            <div className="h-40 min-w-96 bg-zinc-600 shadow-lg"></div>
            <div className="h-40 min-w-96 bg-zinc-600 shadow-lg"></div>
            <div className="h-40 min-w-96 bg-zinc-600 shadow-lg"></div>
            <div className="h-40 min-w-96 bg-zinc-600 shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
