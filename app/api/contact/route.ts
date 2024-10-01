import { sendEmail } from "@/app/_lib/util";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;
  if (!name || !email || !message) {
    console.log("Empty input")
    return NextResponse.json(
      {
        error: "Inputs are required",
      },

      {
        status: 400,
      }
    );
  }

  try {
    await sendEmail({
      name,
      email,
      message,
    });
    return NextResponse.json({
      message: "Sending Message Successfull",
    });
  } catch (error) {
    console.log("tried"+ error)
    return NextResponse.json(
      {
        error: "Error sending message",
      },
      { status: 500 }
    );
  }
}
