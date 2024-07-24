import AdminSideBar from "@/components/shared/AdminSideBar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <main>
         <section className="flex flex-row">
        
        <aside id="default-sidebar" className=" left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 justify-start" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
              <AdminSideBar/>
          </div>
        </aside>
        <div className="px-20">
        {children}
        </div>
        
     
    </section>
     </main>
  );
}
