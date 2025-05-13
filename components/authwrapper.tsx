"use client";
// eslint-disable-next-line tailwindcss/classnames-order
// eslint-disable-next-line tailwindcss/no-custom-classname
// eslint-disable-next-line tailwindcss/enforces-shorthand
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line no-undef
/* eslint-disable */



import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Loader from "@/components/loadingscreen"; // Import the LoadingScreen


// Welcome Screen Component
function WelcomeScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000); // Show for 2 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1C1F2E] text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <img src="/icons/logo (2).png" alt="VisionTalk Logo" className="w-100 mb-4" />
        <h1 className="text-4xl font-bold">Welcome to VisionTalk</h1>
        <p className="text-lg opacity-80">Bridging Distances, Connecting Visions.</p>
      </motion.div>
    </div>
  );
}

// AuthWrapper: Handles auth state and UI flow
export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useAuth();
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Ensures we only render client-side code
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent mismatch before the component is mounted
  if (!isMounted) return <Loader />; // Hydration fallback

  if (showWelcome) return <WelcomeScreen onFinish={() => setShowWelcome(false)} />;
  if (!isLoaded) return <Loader/>;

  return <>{children}</>;
}
