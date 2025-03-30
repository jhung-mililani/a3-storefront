"use client";

import { Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { useCart } from "../../context/CartContext"; // Asegúrate de que esta ruta es correcta

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { cart } = useCart(); // Usamos la lista de productos, no solo cartCount

  // 🧮 Total items y total price
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 w-full items-center px-4">
        {/* LEFT */}
        <div className="flex w-1/3 items-center justify-start">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="mt-8 flex flex-col gap-4">
                <Link href="#featured">Featured</Link>
                <Link href="/collections">Collections</Link>
                <Link href="/services">Services</Link>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="ml-4 hidden md:flex gap-6">
            <Link href="#featured">Featured</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/client-services">Services</Link>
          </nav>
        </div>

        {/* CENTER */}
        <div className="flex w-1/3 justify-center">
          {isHomePage ? (
            <div className="h-5 overflow-hidden font-bold">
              <div className="relative bottom-1 transition-[bottom] duration-200 hover:bottom-[21px]">
                <div className="text-xl italic">Brave Graves.</div>
                <div className="text-xs uppercase">Here for you.</div>
              </div>
            </div>
          ) : (
            <Link href="/">
              <div className="h-5 overflow-hidden font-bold">
                <div className="relative bottom-1 transition-[bottom] duration-200 hover:bottom-[21px]">
                  <div className="text-xl italic">Brave Graves.</div>
                  <div className="text-xs uppercase">Here for you.</div>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex w-1/3 items-center justify-end gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {totalCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex h-full flex-col">
                <h2 className="mb-4 text-lg font-semibold">Your Cart</h2>
                <div className="flex-1">
                  {cart.length > 0 ? (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-md overflow-hidden bg-muted">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.quantity} x ${item.price.toFixed(2)}
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
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full">Checkout</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
