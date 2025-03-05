import "~/styles/globals.css";

// import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import localFont from "next/font/local";

const apercu = localFont({
  src: [
    {
      path: "../../public/fonts/apercu-regular-pro.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-italic-pro.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/apercu-bold-pro.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-bold-italic-pro.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-apercu",
});

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Brave Graves",
  description:
    "Elevate your eternal resting place with the premier global platform for luxury burial plots, artisan headstones, and premium memorials. Honoring legacies with elegance and distinction.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${apercu.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
