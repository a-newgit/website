import { jwtVerify } from "jose";

const JWT_SECRET = import.meta.env.JWT_SECRET || "default-secret-change-me";

export async function verifyAuth(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}
