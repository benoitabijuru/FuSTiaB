import Topbar from "@/components/shared/Topbar";
import FooterItem from "@/components/shared/Footer";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="flex h-screen flex-col" >
                <Topbar/>
                 <main className="flex-1 mt-28">{children}</main>
                 <hr />
                <FooterItem/>
        </div>
    
  );
}
