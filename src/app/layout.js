import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import DelayedPopup from "@/components/popup";
import Footer from "@/components/footer";
import Header from "@/components/navbar";
import Layout from "@/components/layout/layout";
import QueryProvider from "@/providers/query-client-provider";
import Providers from "@/lib/povider";
import { NuqsProvider } from "@/providers/nuqs-provider";

export const brandonText = localFont({
  src: [
    {
      path: "../../public/font/edensor/Edensor-FREE.otf",
    },
  ],
  variable: "--font-brandon",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Murliwala Aggarwal",
  description:
    "Murliwala Aggarwal Sweets was founded in 2012 by Mr. Manoj Kumar Goyal, with a simple vision — to serve honest, high-quality sweets and snacks made with purity, tradition, and consistency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brandonText.variable} antialiased`}
      >
        <QueryProvider>
          <Providers>
            <NuqsProvider>
              <Layout>{children}</Layout>
            </NuqsProvider>
            {/* <DelayedPopup /> */}
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
