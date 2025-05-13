"use client";

import { ReactNode, Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AuthWrapper from "@/components/authwrapper"; // Import the wrapper
import LoadingScreen from "@/components/Loader"; // Import LoadingScreen here as well
import ClientOnly from "@/components/clientonly"; // Import ClientOnly component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1C1F2E] text-white`}>
        <ClerkProvider
          appearance={{
            layout: {
              socialButtonsVariant: "iconButton",
              logoImageUrl: "/icons/logo (2).png",
            },
            variables: {
              colorText: "#fff",
              colorPrimary: "#0E78F9",
              colorBackground: "#1C1F2E",
              colorInputBackground: "#252A41",
              colorInputText: "#fff",
            },
          }}
        >
          <Toaster />
          {/* Wrap everything inside ClientOnly to prevent SSR mismatch */}
          <ClientOnly>
            {/* Wrap AuthWrapper in Suspense to delay rendering */}
            <Suspense fallback={<LoadingScreen />}>
              <AuthWrapper>{children}</AuthWrapper>
            </Suspense>
          </ClientOnly>
        </ClerkProvider>
      </body>
    </html>
  );
}
