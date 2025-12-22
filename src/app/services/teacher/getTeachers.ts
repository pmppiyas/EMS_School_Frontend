import { serverFetch } from "@/lib/serverFetch";

export const getTeachers = async () => {
  const res = await serverFetch.get("teacher");

  let data;

  try {
    data = await res.json();
  } catch (err) {
    console.error("JSON parse error:", err);
    return null;
  }

  if (!res.ok) {
    console.error("Teacher API error:", data);
    throw new Error("Failed to fetch teachers");
  }

  return data.data;
};
