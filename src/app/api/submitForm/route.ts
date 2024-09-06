// app/api/submitForm/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, companyWebsite } = body;

  console.log("Form submitted:", { name, email, phone, companyWebsite });

  // For now, we'll just return the submitted data in the response
  return NextResponse.json({
    message: "Form submitted successfully",
    data: { name, email, phone, companyWebsite },
  });
}
