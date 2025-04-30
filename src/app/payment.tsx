// Import PayPal script loader
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {/* Wrap the app with PayPalScriptProvider */}
        <PayPalScriptProvider
          options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",
            currency: "USD", // Set your preferred currency
          }}
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </PayPalScriptProvider>
      </body>
    </html>
  );
}