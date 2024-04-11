import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";




const inter = Inter({ subsets: ["latin"] });

//  create a context for user to access web app

//const userContext = createContext({})

export const metadata: Metadata = {
  title:{
    absolute:"",
    default:"FuSTiaB",
    template:"%s | Codevolution"
  }, 
  description: "Future of science, technology in advanced business.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
                {children}
            </body>
        </html>
    </ClerkProvider>
  );
}
