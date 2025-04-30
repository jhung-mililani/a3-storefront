"use client";

import { signIn } from "next-auth/react";

export function LoginButtons() {
  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => signIn("discord")}
        className="rounded-full bg-blue-600 px-10 py-3 font-semibold text-white no-underline transition hover:bg-blue-700"
      >
        Login with Discord
      </button>
      <button
        onClick={() => signIn("google")}
        className="rounded-full bg-red-600 px-10 py-3 font-semibold text-white no-underline transition hover:bg-red-700"
      >
        Login with Google
      </button>
    </div>
  );
}