"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "../ui/separator"
import { usePathname } from "next/navigation"
import { sideNavLinks } from "@/constants"
import Link from "next/link"
import { Button } from "../ui/button"


const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[0]
  
  const SideNav = () => {
    const pathname = usePathname();
    return (
      <nav className="">
        <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <div className="bg-white rounded-full">
            <Image
              src="/assets/icons/icons8-menu.svg" width={20} height={20}
              alt="Menu Icon"
              className="cursor-pointer m-2 "

            />
            </div>
          
          </SheetTrigger>
          <SheetContent side={side} className="w-[400px] flex flex-col gap-6 bg-white ">
            <Image 
              src="/assets/images/fustiab.svg"
              alt="logo"
              width={128}
              height={38}
            />
            <Separator className="border border-gray-50" />
            <div className="">
            <div className="py-2">
            <Link href="/newsletter"><Button type="submit" className="bg-sky-50 font-semibold text-black  w-full rounded-lg hover:bg-blue-200"  >Subscribe To Newsletter</Button></Link>
          </div>
            </div>
            <div className="">
            <ul className="md:flex-between flex w-full flex-col gap-5 ml-20">
  {sideNavLinks.map((link) => {
    const isActive = pathname === link.path;
    
    return (
      <li
        key={link.path}
        className={`${
          isActive && 'text-slate-500'
        } p-medium-16 whitespace-nowrap hover:font-bold w-full`}
      >
        <Link href={link.path}>{link.name}</Link>
      </li>
    );
  })}
</ul>
            </div>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
      </nav>
    )
  }
  
  export default SideNav
  



