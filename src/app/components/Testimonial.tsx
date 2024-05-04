export default function Testimonial({ text, user }: { text: string, user: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-between rounded-md border border-gray-200 shadow-sm bg-gray-100 p-8">
      <p>{text}</p>
      <p className="mt-4 font-medium">{user}</p>


    </div>
  )
}