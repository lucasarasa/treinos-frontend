import { cookies } from "next/headers";

export const getSessionServer = async () => {
  const _cookies = await cookies();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`,
    {
      headers: {
        cookie: _cookies.toString(),
      },
    },
  );

  if (!response.ok) return null;

  return response.json();
};
