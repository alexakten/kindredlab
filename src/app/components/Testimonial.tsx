import Image from "next/image"

export default function Testimonial({ imageUrl, text, user, role }: { imageUrl: string, text: string, user: string, role: string }) {
  return (
    <div className="mx-2 w-72 sm:w-96 h-full flex flex-col justify-between rounded-md border border-gray-200 shadow-sm bg-gray-100 p-6">
      <p>{text}</p>
      <div className="mt-4 flex items-center gap-2">
        {/* <div className="w-10 h-10 relative bg-gray-200 rounded-full overflow-hidden">

          <Image
            src={imageUrl}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />

        </div> */}
        <div>
          <p className="font-medium">{user}</p>
          <p className="text-xs opacity-50">{role}</p>
        </div>
      </div>


    </div>
  )
}