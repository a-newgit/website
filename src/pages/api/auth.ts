import type { APIRoute } from "astro";
import { SignJWT } from "jose";

export const prerender = false;

const PORTFOLIO_PASSWORD = import.meta.env.PORTFOLIO_PASSWORD || "portfolio";
const JWT_SECRET = import.meta.env.JWT_SECRET || "default-secret-change-me";

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const formData = await request.formData();
  const password = formData.get("password");

  if (password !== PORTFOLIO_PASSWORD) {
    return redirect("/portfolio/login?error=invalid");
  }

  const secret = new TextEncoder().encode(JWT_SECRET);
  const token = await new SignJWT({ authenticated: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  cookies.set("portfolio_auth", token, {
    path: "/",
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return redirect("/portfolio");
};
