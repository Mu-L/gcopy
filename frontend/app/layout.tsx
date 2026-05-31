import { Inter } from "next/font/google";

import "@/app/globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "GCopy - Sync text screenshot & file",
  description:
    "A clipboard synchronization web service for different devices that can synchronize text, screenshots, and files.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-200`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
