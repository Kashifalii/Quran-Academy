import { createClient } from "@/lib/supabase/server";
import type { FeePlan } from "@/lib/supabase/types";
import { fallbackFeePlans } from "./fallback";

export async function getPublicFeePlans() {
  const supabase = await createClient();

  if (!supabase) {
    return fallbackFeePlans;
  }

  const { data } = await supabase
    .from("fee_plans")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  return (data ?? []) as FeePlan[];
}

export async function getAllFeePlansForAdmin() {
  const supabase = await createClient();

  if (!supabase) {
    return fallbackFeePlans;
  }

  const { data } = await supabase.from("fee_plans").select("*").order("display_order");
  return (data ?? []) as FeePlan[];
}
