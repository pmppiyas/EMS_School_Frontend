import { env } from "@/config/env";
import { getCookie } from "@/lib/JwtToken";
import { IUser } from "@/types/types";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getUserInfo = async (): Promise<IUser | null> => {
  try {
    const accessToken = await getCookie("accessToken");
    if (!accessToken) {
      return null;
    }

    const verifiedToken = jwt.verify(accessToken, env.JWT_SECRET) as JwtPayload;

    return {
      id: verifiedToken.id,
      email: verifiedToken.email,
      role: verifiedToken.role,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};
