import connectToDB from "@/lib/connectDb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();
    const { email, password } = await request.json();
    console.log(email,password)

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    const token = await generateToken({
      username: existingUser.username,
      email: existingUser.email,
    });

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          email: existingUser.email,
          name: existingUser.username,
        },
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
      path: "/", // ensure available across the app
    });

    return response;
  } catch (error) {
    console.error("Error in logging in:", error);
    return NextResponse.json({ error: "Error in logging in" }, { status: 500 });
  }
}
