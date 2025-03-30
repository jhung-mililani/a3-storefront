import "~/styles/globals.css";
import { type Metadata } from "next";
import localFont from "next/font/local";
import { TRPCReactProvider } from "~/trpc/react";

import { CartProvider } from "./context/CartContext"; // <-- Ajusta si tu "context" está en /app/context
import Header from "./(main)/_components/header";      // <-- Ajusta la ruta si tu header está en esta carpeta

const apercu = localFont({
  src: [
    {
      path: "../fonts/apercu-regular-pro.ttf", // ✅ subir un nivel
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/apercu-italic-pro.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/apercu-bold-pro.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/apercu-bold-italic-pro.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-apercu",
});



export const metadata: Metadata = {
  title: "Brave Graves",
  description:
    "Elevate your eternal resting place with the premier global platform for luxury burial plots...",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={apercu.variable}>
      <body>
        <CartProvider>
          <TRPCReactProvider>
            <Header />
            {children}
          </TRPCReactProvider>
        </CartProvider>
      </body>
    </html>
  );
}
