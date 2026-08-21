"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

type StaffRole = "editor" | "reviewer" | "admin";

export async function createStaffAccount(formData: {
  name: string;
  email: string;
  password: string;
  role: StaffRole;
}) {
  // 1. Confirm the CALLER is a logged-in admin before doing anything.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated." };
  }

  const { data: callerProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (callerProfile?.role !== "admin") {
    return { error: "Only an administrator can create staff accounts." };
  }

  // 2. Now safe to use the admin (service_role) client.
  const admin = createAdminClient();

  const { data: created, error: createError } =
    await admin.auth.admin.createUser({
      email: formData.email,
      password: formData.password,
      email_confirm: true, // no email confirmation step needed
      user_metadata: { name: formData.name },
    });

  if (createError || !created.user) {
    return { error: createError?.message ?? "Failed to create account." };
  }

  // 3. The trigger already created a 'client' profile row — promote it
  //    to the intended staff role. This update goes through with the
  //    service_role key, so the "block self role-change" trigger allows it.
  const { error: roleError } = await admin
    .from("profiles")
    .update({ role: formData.role, name: formData.name })
    .eq("id", created.user.id);

  if (roleError) {
    return { error: roleError.message };
  }

  revalidatePath("/admin/staff");
  return { success: true };
}
