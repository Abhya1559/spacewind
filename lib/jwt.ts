import jwt from "jsonwebtoken";

interface UserPayload {
  username: string;
  email: string;
}
const JWT_SECRET = process.env.JWT_SECRET;

export function generateToken(payload: UserPayload): string {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string): UserPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as UserPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}
