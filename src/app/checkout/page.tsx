"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
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
import { Tabs, TabsContent } from "~/components/ui/tabs";

export default function CheckoutPage() {
  // state variable to manage the active tab
  // this state is used to switch between "member" and "create" tabs
  const [activeTab, setActiveTab] = useState("member");

  // state variables for member checkout
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // state variables for create account
  const [name, setName] = useState("");
  const [createAccountEmail, setCreateAccountEmail] = useState("");
  const [createAccountPassword, setCreateAccountPassword] = useState("");
  const [receiveEmails, setReceiveEmails] = useState(true);

  // state variables for guest checkout
  const [guestEmail, setGuestEmail] = useState("");
  const [receiveEmailsGuest, setReceiveEmailsGuest] = useState(true);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row">
      {/* Left Column - Checkout Options */}
      <div className="flex-1 space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="member">
            <Card className="border transition-colors hover:border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <p>Member Checkout</p>
                  <Button
                    variant="link"
                    className="h-0 p-0 underline underline-offset-1"
                    onClick={() => setActiveTab("create")}
                  >
                    Create Account
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Input
                        type="email"
                        placeholder="Email or Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border transition-colors hover:border-gray-800"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <div className="relative">
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="border pr-16 transition-colors hover:border-gray-800"
                        />
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant={"link"}
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-0 text-xs text-muted-foreground hover:text-card-foreground"
                            >
                              Forgot
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-md flex items-center justify-between">
                                <p>Forgot Password</p>
                                <Button variant={"link"} asChild>
                                  <AlertDialogCancel>Close</AlertDialogCancel>
                                </Button>
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                <span>
                                  Enter the email address associated with your
                                  account and we&apos;ll send you a link to
                                  reset your password.
                                </span>
                                <Input
                                  type="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="mt-8"
                                />
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="flex flex-col gap-4">
                              <AlertDialogAction className="w-full">
                                Send Link
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full rounded-none">Log In</Button>
                <div className="text-center text-xs">
                  By proceeding, you agree to the{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link href="/terms" className="underline">
                    Terms of Service
                  </Link>
                  .
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="create">
            <Card className="border transition-colors hover:border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <p>Create Account</p>
                  <Button
                    variant="link"
                    className="h-0 p-0 underline underline-offset-1"
                    onClick={() => setActiveTab("member")}
                  >
                    Log In
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col gap-4">
                      <Input
                        type="text"
                        placeholder="First and Last Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border transition-colors hover:border-gray-800"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={createAccountEmail}
                        onChange={(e) => setCreateAccountEmail(e.target.value)}
                        className="border transition-colors hover:border-gray-800"
                      />
                      <Input
                        type="password"
                        placeholder="Password (8+ characters)"
                        value={createAccountPassword}
                        onChange={(e) =>
                          setCreateAccountPassword(e.target.value)
                        }
                        className="border transition-colors hover:border-gray-800"
                      />
                    </div>
                    <div className="items-top flex space-x-2">
                      <Checkbox
                        id="receiveEmails"
                        checked={receiveEmails}
                        onCheckedChange={(checked: boolean | "indeterminate") =>
                          setReceiveEmails(!!checked)
                        }
                      />
                      <div className="grid items-center gap-1.5 leading-none">
                        <label
                          htmlFor="receiveEmails"
                          className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I would like to receive emails with exclusive
                          promotions, popular releases, and more
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full rounded-none">Create Account</Button>
                <div className="text-center text-xs">
                  By proceeding, you agree to the{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link href="/terms" className="underline">
                    Terms of Service
                  </Link>
                  .
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

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
