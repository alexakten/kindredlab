import Link from "next/link";

export default function CTAFooter({ dict }: { dict: any }) {
  return (
    <>
      <div className="my-12 flex w-full flex-col items-center justify-center">
        <p className="mb-6 text-center font-medium">
          See how Kindred can help you <br /> — Book a demo today
        </p>
        <Link
          href="https://cal.com/kindred-house/30min"
          className="relative flex items-center justify-center gap-3 rounded-full bg-black px-6 py-2 font-basier text-xs text-white hover:bg-neutral-800 sm:text-sm"
          scroll={false}
          replace
        >
          {dict.home.hero.cta2}
        </Link>
      </div>

      <div className="relative z-10 mt-12 flex w-full max-w-8xl items-end justify-between gap-2 px-4 text-sm text-black sm:px-16">
        <p className="opacity-50">© 2025 Kindred House</p>
        <div className="flex flex-col items-end gap-2">
          <Link
            className="opacity-50 hover:opacity-100"
            href={"mailto:hello@kindredlab.io"}
          >
            hello@kindredlab.io
          </Link>
          <Link
            className="opacity-50 hover:opacity-100"
            href={"tel:+46709513830"}
          >
            +46 70-951 38 30{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
