import { Motion } from "../../components/Motion";

export default function CaseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex select-none flex-col items-center justify-center overflow-x-hidden bg-white px-3 py-1 text-left tracking-tight text-black sm:px-12 sm:py-4  ">
      <Motion
        initial={{ opacity: 0, y: 0, filter: "blur(1rem)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
        className="flex w-full flex-col items-center"
      >
        {children}
      </Motion>
    </main>
  );
}
