import connectToDB from "@/lib/connectDb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "@/lib/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await connectToDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "please fill all the fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return NextResponse.json({
        error: "User does not exist",
      });
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
        existingUser: {
          email: existingUser.email,
          name: existingUser.username,
        },
        token,
      },

      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour
    });

    return response;
  } catch (error) {
    console.log("Error in logging in", error);
    return NextResponse.json({
      error: "Error in logging in",
      status: 500,
    });
  }
}
