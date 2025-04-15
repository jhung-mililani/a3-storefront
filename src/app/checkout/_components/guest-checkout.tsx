"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";

type GuestCheckoutProps = {
  guestCheckoutTitle?: string;
  checkoutButtonText?: string;
};

export function GuestCheckout({
  guestCheckoutTitle = "Guest Checkout",
  checkoutButtonText = "Checkout as Guest",
}: GuestCheckoutProps) {
  // state variables for guest checkout
  const [guestEmail, setGuestEmail] = useState("");
  const [receiveEmailsGuest, setReceiveEmailsGuest] = useState(true);

  return (
    <Card className="border transition-colors hover:border-gray-800">
      <CardHeader>
        <CardTitle>{guestCheckoutTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                type="email"
                placeholder="Email Address"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="border transition-colors hover:border-gray-800"
              />
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox
                id="receiveEmailsGuest"
                checked={receiveEmailsGuest}
                onCheckedChange={(checked: boolean | "indeterminate") =>
                  setReceiveEmailsGuest(!!checked)
                }
              />
              <div className="grid items-center gap-1.5 leading-none">
                <label
                  htmlFor="receiveEmails"
                  className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I would like to receive emails with exclusive promotions,
                  popular releases, and more
                </label>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full rounded-none">{checkoutButtonText}</Button>
      </CardFooter>
    </Card>
  );
}
