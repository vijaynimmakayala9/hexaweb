import "./globals.css";
import { DM_Sans, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Transition from "@/components/Transition";
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL("https://hexasoftsolutions.example"),
  title: {
    default: "Hexasoftsolutions | Digital Solutions",
    template: "%s | Hexasoftsolutions",
  },
  description: "Thoughtful software, web, mobile, cloud and AI solutions.",
  openGraph: { type: "website", siteName: "Hexasoftsolutions" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>
        <Navbar />
        <main id="main">
          <Transition>{children}</Transition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
