import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

//  create a context for user to access web app

//const userContext = createContext({})

export const metadata: Metadata = {
  title:{
    default:"FUSTIAB",
    template:"%s | FUSTIAB"
  }, 
  description: "Discover the Magic of Technology and Dive Deep into the World of Entrepreneurship. Be Prepared for Future Trends by explore the cutting-edge world of technology and unleash your entrepreneurial spirit. Stay ahead of the curve by understanding and preparing for future trends in the industry.",
//  metadataBase:new URL('/'),
 alternates: {
  canonical: '/',
  languages: {
    'en-US': '/en-US',
  },
},
openGraph: {
  images: '/og-image.png',
  title:"FUSTIAB",
  description: "Discover the Magic of Technology and Dive Deep into the World of Entrepreneurship."
},
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
                <SpeedInsights/>
                <Analytics/>
            </body>
        </html>
    </ClerkProvider>
  );
}
