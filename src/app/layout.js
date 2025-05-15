export const metadata = {
  title: "JONLEE PORTFOLIO",
  description: "Next.js Portfolio",
};

import "./globals.css";
import AppShell from "@/components/AppShell";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
