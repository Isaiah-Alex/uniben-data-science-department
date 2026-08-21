import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * ADMIN-ONLY client. Uses the secret service_role key, which bypasses RLS
 * entirely. Only ever import this inside Server Actions or Route Handlers
 * that you've already checked require role === 'admin'.
 *
 * NEVER import this into a "use client" file. NEVER send this key to
 * the browser. If this file ends up in client JS, your whole database
 * is exposed.
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}
