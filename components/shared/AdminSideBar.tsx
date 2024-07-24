import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import Image from 'next/image';

const AdminSideBar = () => {
  // const router = useRouter();
  // const pathname = usePathname();

  // const { userId } = useAuth();

  return (
  
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800 text-black ">
          <div className="mt-10 justify-center">
           <Link href="/" >
            <Image
              src="/assets/images/fustiab.svg" 
              width={128} 
              height={38}
              alt="FUSTIAB Logo"
              />
            </Link> 
            <div className="">
              <div className=""><Link href="/admin/createQuotes" ><p className="p-3 justify-center">Publish a new Daily Quotes</p></Link></div>
              <div className=""><Link href="/admin/createPosts" ><p className="p-3 justify-center">Publish a new Post</p></Link></div>
            </div>
            
          </div>
          
      </div>
      
  )
}

export default AdminSideBar