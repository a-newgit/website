import { jwtVerify } from "https://deno.land/x/jose@v5.2.0/index.ts";

const JWT_SECRET = Deno.env.get("JWT_SECRET") || "default-secret-change-me";

export default async (request, context) => {
  const url = new URL(request.url);

  // Only protect /portfolio paths (except login)
  if (
    !url.pathname.startsWith("/portfolio") ||
    url.pathname === "/portfolio/login"
  ) {
    return context.next();
  }

  const cookies = request.headers.get("cookie") || "";
  const tokenMatch = cookies.match(/portfolio_auth=([^;]+)/);
  const token = tokenMatch?.[1];

  if (!token) {
    return Response.redirect(new URL("/portfolio/login", request.url), 302);
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret);
    return context.next();
  } catch {
    return Response.redirect(new URL("/portfolio/login", request.url), 302);
  }
};

export const config = {
  path: "/portfolio/*",
};
