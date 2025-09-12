import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import ContextProvider from "./context";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Graffiti",
  description: "Next generation on-chain microblogging",
  keywords: [
    "blockchain",
    "microblogging",
    "on-chain",
    "crypto",
    "cryptocurrency",
    "graffiti",
    "erc20",
    "token",
  ],
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
  preload: false,
});

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ContextProvider>{children}</ContextProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
