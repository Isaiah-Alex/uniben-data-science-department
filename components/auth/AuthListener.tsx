"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuthStore, type AuthUser, type UserRole } from "@/lib/auth/store";

/**
 * Mount this ONCE in the root layout, as a sibling of {children} —
 * it renders nothing. Unlike the old AuthProvider, it does NOT wrap
 * your app in a context provider; any component can read auth state
 * directly via useAuthStore(), no wrapping required.
 */
export function AuthListener() {
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);

  useEffect(() => {
    const supabase = createClient();

    async function loadUser() {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (!authUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("name, role")
        .eq("id", authUser.id)
        .single();

      const user: AuthUser = {
        id: authUser.id,
        email: authUser.email!,
        name: profile?.name || authUser.email!,
        role: (profile?.role as UserRole) || "client",
      };
      setUser(user);
      setLoading(false);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
