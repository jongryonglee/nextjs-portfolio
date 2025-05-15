"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/Navbar";
import Stars from "@/components/Stars";
import Logo from "@/components/Logo";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";

export default function AppShell({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-fixed bg-gradient-to-b from-[#000428] via-[#004e92] to-[#000000] relative">
        {/* Header */}
        <div className="z-50 fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 sm:px-16 sm:py-8 text-white h-[80px] sm:h-[100px]">
          <Logo />
          <NavBar />
          <SocialIcons />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fixed bg-gradient-to-b from-[#000428] via-[#004e92] to-[#000000] relative">
      <Stars count={40} />

      {/* Header */}
      <div className="z-50 fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 sm:px-16 sm:py-8 text-white h-[80px] sm:h-[100px]">
        <Logo />
        <NavBar />
        <SocialIcons />
      </div>

      {/* Main content area */}
      <div>{children}</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
