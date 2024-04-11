import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="flex h-screen flex-col" >
                <Topbar/>
                 <main className="flex-1">{children}</main>
                 
                <Footer/>
        </div>
    
  );
}
