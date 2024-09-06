// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { name, email, phone, companyWebsite } = body;

//   // Log the form data for testing purposes
//   console.log("Form Data:", { name, email, phone, companyWebsite });

//   try {
//     // Just return a success message for now
//     return NextResponse.json(
//       { message: "Form submitted successfully!" },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Error processing form:", error);
//     return NextResponse.json(
//       { message: "Failed to process form" },
//       { status: 500 },
//     );
//   }
// }
