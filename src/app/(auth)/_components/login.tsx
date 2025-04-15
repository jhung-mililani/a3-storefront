"use client";

import { useState } from "react";
import Link from "next/link";
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

type LoginProps = {
  loginTabTitle?: string;
  createTabTitle?: string;
};

export default function Login({
  loginTabTitle = "Member Login",
  createTabTitle = "Create Account",
}: LoginProps) {
  // state variable to manage the active tab
  // this state is used to switch between "login" and "create" tabs, defaults to login
  const [activeTab, setActiveTab] = useState("login");

  // state variables for member login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // state variables for account creation
  const [name, setName] = useState("");
  const [createAccountEmail, setCreateAccountEmail] = useState("");
  const [createAccountPassword, setCreateAccountPassword] = useState("");
  const [receiveEmails, setReceiveEmails] = useState(true);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsContent value="login">
        <Card className="border transition-colors hover:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{loginTabTitle}</span>
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
                              account and we&apos;ll send you a link to reset
                              your password.
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
              <p>{createTabTitle}</p>
              <Button
                variant="link"
                className="h-0 p-0 underline underline-offset-1"
                onClick={() => setActiveTab("login")}
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
                    onChange={(e) => setCreateAccountPassword(e.target.value)}
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
                      I would like to receive emails with exclusive promotions,
                      popular releases, and more
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
  );
}
