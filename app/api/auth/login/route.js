import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({ email, password });
  return { user, error };
};

const signOut = async () => {
  await supabase.auth.signOut();
};

const test_auth = async () => {
  const supabaseUrl = "";
  const supabaseKey = "";

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });

  const email = "test@gmail.com";
  const password = "ewu890dsoijFUD*(iokf89ewuoikfhjds";
  const { user, error } = await supabase.auth.signUp({ email, password });

  console.log(user);
  console.log(supabase.auth.user());
};

export async function GET() {
  test_auth();
  return NextResponse.json({});
}
