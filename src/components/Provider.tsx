"use client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;
  return (
    <ThemeProvider attribute="class">
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
