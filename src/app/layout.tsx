import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Noor Mohammed portfolio",
  description: "As a Full Stack Developer at Aisthetic, I leverage my skills in Node.js and E-Commerce to create innovative and user-friendly web applications. I have also contributed to the development of networking products as an Associate Member of Technical Staff at Aprecomm. With a Bachelor of Technology in Mechanical Engineering from Madanapalle Institute of Technology & Science, I bring a unique perspective to the tech industry. I am passionate about learning new technologies and improving my coding skills. I have completed certifications in Git, HTML, and ReactJs components from Simplilearn. I am always eager to take on new challenges and collaborate with diverse teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
