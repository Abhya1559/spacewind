import jwt from "jsonwebtoken";


interface UserPayload {
  username: string;
  email: string;
}
const JWT_SECRET = process.env.JWT_SECRET;
console.log("JWT_SECRET:", JWT_SECRET)

export async function generateToken(payload: UserPayload): Promise<string> {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

export async function verifyToken(token: string): Promise<UserPayload | null> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as UserPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}
