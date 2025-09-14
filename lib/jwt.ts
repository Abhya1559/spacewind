import jwt from "jsonwebtoken";

import {jwtVerify} from "jose"

interface UserPayload {
  username: string;
  email: string;
}
const JWT_SECRET = process.env.JWT_SECRET!;
const secret = new TextEncoder().encode(JWT_SECRET);

export function generateToken(payload: UserPayload): string {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string): UserPayload | null {
  try {
    const decoded = jwtVerify(token, secret) as unknown as UserPayload;
    console.log("Decoded token:", decoded);
    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
}
