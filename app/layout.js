import "./globals.css";
import { Work_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const workSands = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Responsive Navbar",
  description:
    "Reusable responsive navbar crated as a React component to speed up your development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSands.className}>
        <header className="site-header">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
