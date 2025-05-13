"use client";
/* eslint-disable */

import { useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering
  }, []);

  if (!isClient) {
    return null; // Prevent rendering anything during SSR
  }

  return <>{children}</>;
}
