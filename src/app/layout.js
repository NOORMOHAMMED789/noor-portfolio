import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noor Mohammed",
  description:
    "Hola, my name is Noor Mohammed. You can call me Noor. Currently Im working as full stack web developer as totally 1.5 year of experience. My tech stack is Next.Js, React.Js, Javascript, CSS, Tailwindcss, material UI, Node.Js, Mongo DB. I have good knowledge about the version controlling like github.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layoutCont">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
