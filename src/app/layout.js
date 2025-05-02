// app/layout.js
import NavBar from "@/components/Navbar";
import "./globals.css";
import Stars from "@/components/Stars";
import Logo from "@/components/Logo";
import SocialIcons from "@/components/SocialIcons";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen h-screen bg-gradient-to-b from-[#000428] via-[#004e92] to-[#000000] relative">
          <Stars count={40} />

          {/* Header */}
          <div className="flex justify-between items-center px-8 py-4 sm:px-16 sm:py-8 text-white z-50 h-[80px] sm:h-[100px]">
            <Logo />
            <NavBar />
            <SocialIcons />
          </div>

          {/* Main content area */}
          <div className="h-[calc(100vh-80px)] sm:h-[calc(100vh-120px)] overflow-y-auto scroll-smooth">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
