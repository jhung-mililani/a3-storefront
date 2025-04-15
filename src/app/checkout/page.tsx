"use client";

import Link from "next/link";
import Login from "~/app/(auth)/_components/login";
import GuestCheckout from "./_components/guest-checkout";
import OrderSummary from "./_components/order-summary";

export default function CheckoutPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row">
      {/* Left Column - Checkout Options */}
      <div className="flex-1 space-y-6">
        <Login loginTabTitle="Member Checkout" />
        <GuestCheckout />
      </div>

      {/* Right Column - Order Summary */}
      <div className="md:w-[400px]">
        <OrderSummary />
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
