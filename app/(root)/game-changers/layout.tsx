import Footer from "@/components/shared/Footer";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <main>
        <div>
            <div>
                
                 {children}
            </div>
        </div>
     </main>
  );
}
