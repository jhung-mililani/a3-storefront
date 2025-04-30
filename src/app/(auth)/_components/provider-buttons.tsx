"use client";

import { Button } from "~/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";

export const ProviderButtons = () => {
  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Button
          size={"icon"}
          variant={"outline"}
          className="w-full"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        >
          <FcGoogle />Continue with Google
        </Button>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Button
          size={"icon"}
          variant={"outline"}
          className="w-full"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        >
          <FaDiscord />Continue with Discord
        </Button>
      </div>
    </div>
  );
};