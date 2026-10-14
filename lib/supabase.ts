import { createClient } from "@supabase/supabase-js";

// Use environment variables or fallback to empty strings if not available
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

// Don't throw an error, just log a warning in development
if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) {
  console.warn(
    "⚠️ Supabase URL or Anon Key is missing. Contact functionality will be limited."
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
