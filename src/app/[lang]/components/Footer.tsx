import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-20 pt-12 ">
      <div className="my-12 w-full">
        <div className="w-full border-t "></div>
      </div>

      <div className="flex w-full justify-between gap-2 text-sm">
        {/* <p className="opacity-50">Designed in Stockholm</p> */}
        <p className="opacity-50">© 2024 Kindred Lab</p>
        <div className="flex flex-col items-end gap-2">
          <Link
            className="text-black opacity-50 hover:opacity-100"
            href={"mailto:hello@kindredlab.io"}
          >
            hello@kindredlab.io
          </Link>
          <Link
            className="text-black opacity-50 hover:opacity-100"
            href={"tel:+46709513830"}
          >
            +46 70-951 38 30{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
