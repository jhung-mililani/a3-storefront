"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "~/components/ui/checkbox";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [receiveEmails, setReceiveEmails] = useState(true);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row">
      {/* Left Column - Checkout Options */}
      <div className="flex-1 space-y-6">
        {/* Member Checkout */}
        <div className="rounded-md border p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-medium">Member Checkout</h2>
            <Link href="#" className="text-sm underline">
              Create Account
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Email or Username"
                className="w-full rounded-md border p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm underline">
                Forgot
              </button>
            </div>
            <button className="w-full rounded-md bg-black py-3 text-white">
              Log In
            </button>
            <div className="text-center text-sm">
              By proceeding, you agree to the{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>{" "}
              &{" "}
              <Link href="/tos" className="underline">
                Terms of Service
              </Link>
              .
            </div>
          </div>
        </div>

        {/* Guest Checkout */}
        <div className="rounded-md border p-6">
          <h2 className="mb-6 text-xl font-medium">Guest Checkout</h2>
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border p-3"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
              />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox
                id="emails"
                checked={receiveEmails}
                onCheckedChange={(checked: boolean | "indeterminate") =>
                  setReceiveEmails(!!checked)
                }
                className="mt-1"
              />
              <label htmlFor="emails" className="text-sm">
                I would like to receive emails with exclusive promotions,
                popular releases, and more
              </label>
            </div>
            <button className="w-full rounded-md bg-black py-3 text-white">
              Checkout as Guest
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="md:w-[400px]">
        <div className="rounded-md border p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-medium">Order Summary</h2>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-medium">Product Name</div>
              <div className="flex gap-4">
                <div className="relative h-16 w-20">
                  <Image
                    src="/placeholder.svg?height=64&width=80"
                    alt="Product Name"
                    width={80}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="font-medium">Size:</span> US Men&apos;s 5.5
                  </div>
                  <div>
                    <span className="font-medium">Condition:</span> New
                  </div>
                  <div>
                    <span className="font-medium">Box:</span> Good Condition
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between">
                <span>Item Subtotal</span>
                <span className="font-medium">$198</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-medium">$14.75</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="font-medium">--</span>
              </div>
            </div>

            <div className="-mx-6 mt-4 bg-gray-200 px-6 py-3">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$212.75</span>
              </div>
            </div>
          </div>
        </div>

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
