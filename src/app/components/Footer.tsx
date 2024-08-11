import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full max-w-8xl flex-col items-center justify-center pb-20 pt-12 ">
      <div className="my-12 w-full">
        <div className="w-full border-t "></div>
      </div>

      <div className="flex w-full justify-between">
        <p className="text-sm opacity-50">© 2024 Kindred Lab</p>

        <div className="flex flex-col gap-3 text-right font-medium">
          <Link className="text-sm hover:underline" href={"tel:+46709513830"}>
            +46 70-951 38 30{" "}
          </Link>
          <Link
            className="text-sm hover:underline"
            href={"mailto:hello@kindredlab.io"}
          >
            hello@kindredlab.io
          </Link>
        </div>
      </div>
    </div>
  );
}
