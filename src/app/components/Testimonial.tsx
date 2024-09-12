import Image from "next/image";

export default function Testimonial({
  imageUrl,
  text,
  user,
  role,
}: {
  imageUrl: string;
  text: string;
  user: string;
  role: string;
}) {
  return (
    <div className="mx-2 flex flex-col justify-between rounded-2xl border border-white border-opacity-20 p-6 shadow-sm ">
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={imageUrl}
            alt="Profile Image"
            layout="fill"
            loading="eager"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="font-medium">{user}</p>
          <p className="text-xs tracking-normal opacity-50">{role}</p>
        </div>
      </div>
      <p className="mt-5">{text}</p>
    </div>
  );
}
