import Topbar from "@/components/shared/Topbar";
import FooterItem from "@/components/shared/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:{
    absolute:"FUSTIAB",
    default:"FUSTIAB",
    template: '%s | FUSTIAB',
  },
  // metadataBase:new URL('/'),
  keywords:["Africa","Technology","Business","Recommendation","Game Changers"],
  generator:"Next.js",
 alternates: {
  canonical: '/',
  languages: {
    'en-US': '/en-US',
  },
},
openGraph: {
  type:"website",
  title:"FUSTIAB",
  url:"/",
  description:"",
  siteName:"FUSTIAB"
  
},
twitter: {
  title:"FUSTIAB",
  description:"Discover the Magic of Technology and Dive Deep into the World of Entrepreneurship. Be Prepared for Future Trends by explore the cutting-edge world of technology and unleash your entrepreneurial spirit. Stay ahead of the curve by understanding and preparing for future trends in the industry.",
},
verification: {
  google: 'google',
  yandex: 'yandex',
  yahoo: 'yahoo',
  other: {
    me: ['my-email', 'my-link'],
  },
  
}
}


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="flex h-screen flex-col" >
                <Topbar/>
                 <main className="flex-1 mt-[100px]">{children}</main>
                 <hr />
                <FooterItem/>
        </div>
    
  );
}
