"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import localFont from 'next/font/local';

const apercuBoldItalic = localFont({
  src: '/../../../../public/fonts/apercu-bold-italic-pro.ttf'
});

// const apercuBold = localFont({
//   src: '/../../../../public/fonts/apercu-bold-pro.ttf'
// });

// const apercuItalic = localFont({
//   src: '/../../../../public/fonts/apercu-italic-pro.ttf'
// });

const apercu = localFont({
  src: '/../../../../public/fonts/apercu-regular-pro.ttf'
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="w-full flex h-16 items-center px-4">
        {/* left section */}
        <div className="flex items-center w-1/3 justify-start">
          {/* mobile header links */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="mt-8 flex flex-col gap-4">
                <Link href="/featured" className="text-lg font-medium">
                  Featured
                </Link>
                <Link href="/collections" className="text-lg font-medium">
                  Collections
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          {/* desktop header links */}
          <nav className={`ml-4 hidden items-center justify-between gap-6 md:flex ${apercu.className}`}>
            <Link href="/featured" className="text-md font-medium">
              Featured
            </Link>
            <Link href="/collections" className="text-md font-medium">
              Collections
            </Link>
          </nav>
        </div>
        
        {/* center section (logo) */}
        <div className="w-1/3 flex justify-center">
          <Link href="/" className={`text-xl font-bold ${apercuBoldItalic.className}`}>
            Brave Graves.
          </Link>
        </div>

        {/* right section */}
        <div className="w-1/3 flex items-center justify-end gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex h-full flex-col">
                <h2 className="mb-4 text-lg font-semibold">Your Cart</h2>
                <div className="flex-1">
                  {cartCount > 0 ? (
                    <div className="space-y-4">
                      {Array.from({ length: cartCount }).map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-md bg-muted"></div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">
                              Product {i + 1}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              $99.99
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Your cart is empty</p>
                  )}
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="mb-4 flex justify-between">
                    <span>Total</span>
                    <span className="font-medium">
                      ${(99.99 * cartCount).toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full">Checkout</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
