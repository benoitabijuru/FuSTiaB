import AdminSideBar from "@/components/shared/AdminSideBar";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


 
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sessionClaims } = auth()

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.role !== 'admin') {
    redirect('/')
  }
  
  return (
     <main>
         <section className="flex flex-row">
        
        <aside id="default-sidebar" className=" left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 justify-start" aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
              <AdminSideBar/>
          </div>
        </aside>
        <div className="m-[100px]">
        {children}
        </div>
        
     
    </section>
     </main>
  );
}
