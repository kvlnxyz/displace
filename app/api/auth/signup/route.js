import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function POST(request) {
  const parsed = await request.json();

  try {
    const { data, error } = await supabase.auth.signUp({
      email: parsed.email,
      password: parsed.password,
    });

    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error);
  }

  return NextResponse.json({});
}
