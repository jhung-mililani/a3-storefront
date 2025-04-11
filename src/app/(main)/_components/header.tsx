"use client";

// import { useState } from "react";
import { Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "~/components/ui/sheet";

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [cartCount, setCartCount] = useState(3);
  const cartCount = 3;
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 w-full items-center px-4">
        {/* left section */}
        <div className="flex w-1/3 items-center justify-start">
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
                <Link href="#featured" className="text-lg font-medium">
                  Featured
                </Link>
                <Link href="/collections" className="text-lg font-medium">
                  Collections
                </Link>
                <Link href="/services" className="text-lg font-medium">
                  Services
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          {/* desktop header links */}
          <nav
            className={`ml-4 hidden items-center justify-between gap-6 md:flex`}
          >
            <Link href="#featured" className="text-md font-medium">
              Featured
            </Link>
            <Link href="/collections" className="text-md font-medium">
              Collections
            </Link>
            <Link href="/client-services" className="text-md font-medium">
              Services
            </Link>
          </nav>
        </div>

        {/* center section (logo) */}
        {/* TODO: make logo smaller on small screens */}
        <div className="flex w-1/3 justify-center">
          {isHomePage ? (
            <div className="h-5 overflow-hidden font-bold">
              <div className="relative bottom-1 transition-[bottom] duration-200 hover:bottom-[21px]">
                <div className="text-xl italic">Brave Graves.</div>
                <div className="whitespace-nowrap text-xs uppercase">
                  Here for you.
                </div>
              </div>
            </div>
          ) : (
            <Link href="/">
              <div className="h-5 overflow-hidden font-bold">
                <div className="relative bottom-1 transition-[bottom] duration-200 hover:bottom-[21px]">
                  <div className="text-xl italic">Brave Graves.</div>
                  <div className="whitespace-nowrap text-xs uppercase">
                    Here for you.
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* right section */}
        <div className="flex w-1/3 items-center justify-end gap-4">
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
                  <SheetClose asChild>
                    <Link href="/checkout">
                      <Button className="w-full">Checkout</Button>
                    </Link>
                  </SheetClose>
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
