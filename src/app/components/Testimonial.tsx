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
    <div className="mx-2 flex h-full w-72 flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:w-96">
      <p>{text}</p>
      <div className="mt-5 flex items-center gap-2">
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
          <p className="text-xs opacity-50">{role}</p>
        </div>
      </div>
    </div>
  );
}
