"use client";

import { Session } from "next-auth";
import { useRouter } from "next/navigation";

interface AuthButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild?: boolean,
  session?: Session | null; // TODO: add session type, don't keep null in prod
};

export const AuthButton = ({
  children,
  mode = "redirect",
  asChild, // when implementing modal, this will be used to pass the button as a child to the modal component
  session,
}: AuthButtonProps) => {
const router = useRouter();

  const onClick = () => {
    if (session) {
      router.push("/logout"); // current url is /api/auth/signout, so need to build custom logout route
    } else {
      router.push("/api/auth/signin"); // current url is /api/auth/signin, so need to build custom login route
    }
  }
  if (asChild) {
    console.log("asChild is not implemented yet");
  }

  if (mode === "modal") {
    return (
      <span>
        TODO: implement modal
      </span>
    );
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}