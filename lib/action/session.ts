import "server-only";
import { cookies } from "next/headers";
import { SessionPayload } from "../definitions";
import { jwtVerify, SignJWT } from "jose";
import { redirect } from "next/navigation";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const jwtVerifyResult = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return jwtVerifyResult.payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(
  payload: Omit<SessionPayload, "expiresAt">
) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt({ ...payload, expiresAt });
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);
  const cookieStore = await cookies();
  if (!session || !payload) {
    return null;
  }
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function verifySession() {
  console.log("Verify session");
  const session = (await cookies()).get("session")?.value;
  const payload = (await decrypt(session)) as SessionPayload;
  if (!payload?.id) {
    redirect("/login");
  }
  return {
    isAuth: true,
    user: payload,
  };
}

export async function deleteSession() {
  (await cookies()).delete("session");
}
