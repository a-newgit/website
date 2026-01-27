import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ redirect, cookies }) => {
  cookies.delete("portfolio_auth", {
    path: "/",
  });

  return redirect("/");
};

export const GET: APIRoute = async ({ redirect, cookies }) => {
  cookies.delete("portfolio_auth", {
    path: "/",
  });

  return redirect("/");
};
