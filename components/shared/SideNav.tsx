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
  import NavItems from "./NavItems"
import { navLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"






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
            <div className="flex flex-col">
            <NavigationMenu>
                <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger >
                      <p className="">Technology</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                        </NavigationMenuContent>
                        <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                
                  

                  <NavigationMenuItem>
                    <NavigationMenuTrigger >
                      <p className="">Technology</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                        </NavigationMenuContent>
                        <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>


                  <NavigationMenuItem>
                    <NavigationMenuTrigger >
                      <p className="">Technology</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                        </NavigationMenuContent>
                        <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger >
                      <p className="">Technology</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                        </NavigationMenuContent>
                        <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger >
                      <p className="">Technology</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                        </NavigationMenuContent>
                        <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                    <NavigationMenuContent>
                       <Link href="/technology" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Technology
                          </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
         
            </div>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
      </nav>
    )
  }
  
  export default SideNav
  



