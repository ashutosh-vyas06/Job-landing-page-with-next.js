import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer/Footer";

const font = Roboto({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Job portal | Landing page",
  description: "Job portal landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
        <ResponsiveNav/>
        {children}
        <Footer/>
        </Provider>
        </body>
    </html>
  );
}
