import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


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
            </body>
        </html>
    </ClerkProvider>
  );
}
