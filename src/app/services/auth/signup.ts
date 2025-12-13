import { env } from "@/config/env";

export const signupUser = async (formData: FormData) => {
  const res = await fetch(
    `${env.NEXT_PUBLIC_BACKEND_URL}/user/create_student`,
    {
      method: "POST",
      body: formData,
      credentials: "include",
    }
  );

  return res.json();
};
