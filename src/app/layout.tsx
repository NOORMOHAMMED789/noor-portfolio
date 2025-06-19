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
  description: "As a Full Stack Developer at Aisthetic, I leverage my skills in Node.js and E-Commerce to create innovative and user-friendly web applications. I have also contributed to the development of networking proAs a Member of Technical Staff at Aprecomm, I specialize in WiFi configuration, Customer Premises Equipment (CPE) management, and TR-069/TR-157 protocol implementations. I work on building scalable, reliable systems that enhance network performance and user experience in the broadband ecosystem.Previously, I served as a Full Stack Developer at Aisthetic, where I applied my expertise in Node.js and E-Commerce platforms to develop intuitive and robust web applications. My academic background in Mechanical Engineering from Madanapalle Institute of Technology & Science adds a multidisciplinary approach to my problem-solving skills in tech.I am passionate about continuous learning and staying current with the latest in technology. I’ve completed certifications in Git, HTML, and ReactJS components through Simplilearn and enjoy collaborating with diverse teams to deliver impactful solutions.ducts as an Associate Member of Technical Staff at Aprecomm. With a Bachelor of Technology in Mechanical Engineering from Madanapalle Institute of Technology & Science, I bring a unique perspective to the tech industry. I am passionate about learning new technologies and improving my coding skills. I have completed certifications in Git, HTML, and ReactJs components from Simplilearn. I am always eager to take on new challenges and collaborate with diverse teams.",
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
