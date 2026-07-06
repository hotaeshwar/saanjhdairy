import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SAANJH Dairy Solutions | Complete Dairy Farm Solutions Under One Roof",
  description: "Since 1964, SAANJH Dairy Solutions provides complete dairy farm setup, farm planning, milking machines, cow comfort systems, dairy tools, AI equipment, sorted semen, and dairy nutrition.",
  keywords: "SAANJH Dairy Solutions, dairy farm setup, milking machines, cow comfort, dairy tools, artificial insemination, sorted semen, dairy nutrition, Abohar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
