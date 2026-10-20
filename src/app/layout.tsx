
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noor Mohammed | Backend Developer",
  description:
    "Portfolio of Noor Mohammed, a backend developer specializing in Node.js, TypeScript, APIs, databases and scalable software systems.",
  openGraph: {
    title: "Noor Mohammed | Backend Developer",
    description:
      "Building reliable backend systems, APIs and software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
