
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noor Mohammed | Full stack developer",
  description:
    "Portfolio of Noor Mohammed, a full stack developer specializing in React.js, Next.js, CSS, Node.js, TypeScript, APIs, databases and scalable software systems.",
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
