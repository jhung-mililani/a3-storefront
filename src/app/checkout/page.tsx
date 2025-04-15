"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Login } from "~/components/auth/login";
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

export default function CheckoutPage() {
  // state variables for guest checkout
  const [guestEmail, setGuestEmail] = useState("");
  const [receiveEmailsGuest, setReceiveEmailsGuest] = useState(true);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row">
      {/* Left Column - Checkout Options */}
      <div className="flex-1 space-y-6">
        <Login loginTabTitle="Member Checkout" />
        <Card className="border transition-colors hover:border-gray-800">
          <CardHeader>
            <CardTitle>Guest Checkout</CardTitle>
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
            <Button className="w-full rounded-none">Checkout as Guest</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Right Column - Order Summary */}
      <div className="md:w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Card className="p-4">
              <CardTitle className="mb-4">Product 1</CardTitle>
              <CardContent className="p-0">
                <div className="flex flex-row gap-4">
                  <div className="flex w-16 min-w-16 items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Product Name"
                      width={64}
                      height={64}
                      className="m-auto block max-w-[100%] object-contain"
                      priority
                      // enable placeholder when image is not svg
                      // placeholder="blur"
                    />
                  </div>
                  <div className="mr-8 flex min-w-[13em] flex-col justify-center text-sm">
                    <p>
                      <b>Size: </b>
                      US Men&apos;s 5.5
                    </p>
                    <p>
                      <b>Condition: </b>
                      New
                    </p>
                    <p>
                      <b>Box: </b>
                      Good Condition
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardTitle className="mb-4">Product 2</CardTitle>
              <CardContent className="p-0">
                <div className="flex flex-row gap-4">
                  <div className="flex w-16 min-w-16 items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Product Name"
                      width={64}
                      height={64}
                      className="m-auto block max-w-[100%] object-contain"
                      priority
                      // enable placeholder when image is not svg
                      // placeholder="blur"
                    />
                  </div>
                  <div className="mr-8 flex min-w-[13em] flex-col justify-center text-sm">
                    <p>
                      <b>Size: </b>
                      US Men&apos;s 5.5
                    </p>
                    <p>
                      <b>Condition: </b>
                      New
                    </p>
                    <p>
                      <b>Box: </b>
                      Good Condition
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4 overflow-hidden p-0">
              <CardContent className="p-4 pb-0">
                <div className="mb-5 flex flex-col justify-center gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Item Subtotal</span>
                    <span>$206</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estimated Shipping</span>
                    <span>$14.75</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estimated Tax</span>
                    <span>--</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-6 flex items-center justify-between bg-[rgba(0,0,0,0.3)] px-4 py-3">
                <span className="font-bold">Total</span>
                <span className="font-bold">$220.75</span>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>

        <div className="mt-4 space-y-2 text-right text-sm">
          <div>
            <Link href="#" className="underline">
              Buyer Protection Policy
            </Link>
          </div>
          <div>
            <Link href="#" className="underline">
              Shipping, Purchases, & Return Policy
            </Link>
          </div>
          <div>
            <Link href="#" className="underline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
