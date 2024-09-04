import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from 'next/link'
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import SideNav from "./SideNav"


const Topbar = () => {
  return (
    <header className='bg-topbar-gradient text-white w-full border-b fixed top-0 z-50'>
      <div className="flex items-stretch justify-between py-2">
        <div className="flex flex-row">
          <div className="items-start p-2">
            <SideNav/>
          </div>
          <div className="py-2 md:block hidden">
            <Link href="/newsletter">
              <Button type="submit" className="bg-sky-50 font-semibold text-black w-full rounded-lg hover:bg-blue-200">
                Subscribe To Newsletter
              </Button>
            </Link>
          </div>

        </div>
        <div className="py-2">
          <Link href="/" className='flex justify-between'>
                {/* <div className="self-center">
                  LOGO
                </div> */}
               <div className="">
                <h1 className="text-5xl font-extrabold self-center ">F<span className="green-gradient-text">U</span>STIAB</h1>
               </div>
          </Link>
        </div>
        
        <div className="flex w-32 justify-end gap-3 mr-10">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
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
      <hr className="hidden md:block bg-white" />
      <div className="flex justify-start my-4">
  <nav className="hidden md:block md:ml-[33.33%] w-full max-w-xs">
        <NavItems />
      </nav>
    </div>

    </header>
  )
}

export default Topbar