import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-20 pt-12 ">

      <div className="w-full my-12">
        <div className="border-t w-full "></div>
      </div>


      <div className="flex w-full justify-between">
        <p className="text-sm opacity-50">© 2024 Kindred Laboratory</p>

        <div className="flex flex-col gap-3 text-right font-medium">
          <Link className="text-sm hover:underline" href={"/"}>
            +46 70-951 38 30          </Link>
          <Link className="text-sm hover:underline" href={"/"}>
            hello@kindredlab.io
          </Link>
        </div>
      </div>
    </div>
  );
}
