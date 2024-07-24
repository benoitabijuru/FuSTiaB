import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import SideNav from "./SideNav"


const Topbar = () => {
  return (
    <header className='bg-slate-800 text-white w-full border-b fixed top-0 z-50'>
      <div className="flex items-stretch justify-between py-2">
        <div className="flex flex-row">
          <div className="items-start p-2">
            <SideNav/>
          </div>
          <div className="py-2">
            <Link href="/newsletter"><Button type="submit" className="bg-sky-50 font-semibold text-black  w-full rounded-lg hover:bg-blue-800 hover:text-white"  >Subscribe To Newsletter</Button></Link>
          </div>
        </div>
        <div className="">
          <Link href="/" className='w-36'>
                <Image
                src="/assets/images/fustiab.svg" width={128} height={38}
                alt="FUSTIAB Logo"
                />
          </Link>
        </div>
        
        <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full bg-blue-700" size="lg">
                <Link href="/sign-in">
                  Login
                </Link>
              </Button>
            </SignedOut>
        </div>
      </div>
      <hr className="bg-white"/>
      <div className="flex justify-between m-4 ">
        <div className="">
        <Link href="/africa"><p className=" p-medium-16 pl-10 ml-40 hover:font-bold  ">Africa</p></Link>
          
        </div>
              <nav className="md:flex-between hidden w-full max-w-xs place-self-center">
                <NavItems />
              </nav>
        <div className="flex flex-row">
        <Link href="/recommendation"><p  className="font-bold p-medium-16 mr-40  hover:font-bold">Recommendation</p></Link>
        </div>
      </div>
        
    </header>
  )
}

export default Topbar