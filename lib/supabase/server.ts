import { createClient, SupabaseClient } from "@supabase/supabase-js";

let cachedAdminClient: SupabaseClient | null = null;

/**
 * Returns a Supabase Admin client initialized with the Service Role key
 * (bypasses RLS safely inside server-side route handlers).
 * Returns null if Supabase environment variables are missing or unconfigured,
 * allowing safe graceful fallback to local data files.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)?.trim();

  if (!rawUrl || !key || !rawUrl.startsWith("http") || key.length < 20) {
    return null;
  }

  const url = rawUrl.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");

  if (!cachedAdminClient) {
    cachedAdminClient = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return cachedAdminClient;
}

/**
 * Returns true if Supabase is configured with valid URL and Key.
 */
export function isSupabaseConfigured(): boolean {
  return getSupabaseAdmin() !== null;
}
