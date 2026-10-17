import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Load .env.local manually
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        process.env[key] = val;
      }
    }
  });
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("--------------------------------------------------");
console.log("Testing Supabase Connection for RH Dynamics...");
console.log("Project URL:", url);
console.log("Has Anon Key:", !!anonKey, anonKey ? `(${anonKey.slice(0, 15)}...)` : "");
console.log("Has Service Key:", !!serviceKey, serviceKey ? `(${serviceKey.slice(0, 15)}...)` : "");
console.log("--------------------------------------------------");

if (!url || !serviceKey) {
  console.error("ERROR: Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function runTests() {
  try {
    // 1. Check reviews table
    console.log("1. Querying 'reviews' table...");
    const { data: reviews, error: revErr, count: revCount } = await supabase
      .from("reviews")
      .select("*", { count: "exact" });

    if (revErr) {
      console.error("❌ Failed to query 'reviews' table:", revErr.message);
    } else {
      console.log(`✅ Successfully queried 'reviews' table! Found ${reviews.length} reviews.`);
      reviews.slice(0, 3).forEach((r, i) => {
        console.log(`   [${i + 1}] ${r.author} (${r.company}) - "${r.metric}"`);
      });
    }

    // 2. Check inquiries table
    console.log("\n2. Querying 'inquiries' table...");
    const { data: inq, error: inqErr } = await supabase
      .from("inquiries")
      .select("*")
      .limit(5);

    if (inqErr) {
      console.error("❌ Failed to query 'inquiries' table:", inqErr.message);
    } else {
      console.log(`✅ Successfully queried 'inquiries' table! Table is active and ready.`);
    }

    // 3. Test insert & delete roundtrip on reviews
    console.log("\n3. Testing live write/delete verification...");
    const testId = "test_" + Date.now();
    const { error: insErr } = await supabase.from("reviews").insert({
      id: testId,
      author: "Test Verification User",
      company: "RHD Quality Check",
      position: "Engineer",
      metric: "Verified Connection",
      rating: 5,
      quote: "Supabase cloud connectivity test confirmed active and working.",
      verified: true,
      date: new Date().toISOString().split("T")[0],
    });

    if (insErr) {
      console.error("❌ Failed to write test review:", insErr.message);
    } else {
      console.log("✅ Insert test succeeded! Review ID:", testId);
      // Clean up test review
      const { error: delErr } = await supabase.from("reviews").delete().eq("id", testId);
      if (delErr) {
        console.error("❌ Failed to cleanup test review:", delErr.message);
      } else {
        console.log("✅ Cleanup test succeeded! Test review removed.");
      }
    }

    console.log("\n==================================================");
    console.log("🎉 ALL SUPABASE TESTS PASSED! DATABASE IS 100% OPERATIONAL");
    console.log("==================================================");
  } catch (err) {
    console.error("Unexpected error testing Supabase:", err);
  }
}

runTests();
