import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: this call refreshes the session token if it's expired.
  // Do not remove it or place logic between client creation and this call.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;

  // Staff-only admin login page — treated separately from /admin/* protection
  const isAdminLoginRoute = path === "/admin/login";
  // Every other /admin/* route requires a logged-in staff session
  const isAdminRoute = path.startsWith("/admin") && !isAdminLoginRoute;
  // Visitor-facing auth pages
  const isVisitorAuthRoute = path === "/login" || path === "/signup";

  // Not logged in and trying to reach a protected admin area -> send to /admin/login
  if (!user && isAdminRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("redirect", path);
    return NextResponse.redirect(url);
  }

  // Logged in and role-check the admin area
  if (user && isAdminRoute) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    const staffRoles = ["editor", "reviewer", "admin"];
    if (!profile || !staffRoles.includes(profile.role)) {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  // Already logged in as staff -> don't show them the admin login page again
  if (user && isAdminLoginRoute) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    const staffRoles = ["editor", "reviewer", "admin"];
    if (profile && staffRoles.includes(profile.role)) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/articles";
      return NextResponse.redirect(url);
    }
  }

  // Already logged in -> don't show them the visitor login/signup pages
  if (user && isVisitorAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
