
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BsFacebook,BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { Button } from '../ui/button';


const Footer = () => {
  return (
    <>
      <footer className="bg-footer-gradient text-white bg-dotted-pattern bg-cover bg-center p-10 sm:p-20 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-6 sm:mb-0">
            <div className="py-2">
              <Link href="/" className='flex'>
                    <div className="self-center">
                      LOGO
                    </div>
                  <div className="">
                    <h1 className="text-5xl font-extrabold self-center ">F<span className="green-gradient-text">U</span>STIAB</h1>
                  </div>
              </Link>
            </div>
            </div>
            <div className="text-center mb-6 sm:mb-0">
              <h3 className="font-extrabold text-lg sm:text-xl green-gradient-text p-2">Follow us</h3>
              <div className="mt-4 flex space-x-6 justify-center">
                <FooterIcon href="https://www.facebook.com/profile.php?id=61558698158377" icon={BsFacebook} />
                <FooterIcon href="https://twitter.com/FuSTIAB" icon={BsTwitter} />
                <FooterIcon href="https://www.linkedin.com/company/fustiab/" icon={BsLinkedin} />
                <FooterIcon href="https://www.instagram.com/fustiab/" icon={BsInstagram} />
              </div>
            </div>
            <div className="w-full sm:w-auto text-center">
              <Link href="/newsletter">
                <Button type="submit" className="bg-sky-50 font-semibold text-black w-full sm:w-auto rounded-lg hover:bg-blue-200">
                  Subscribe To Newsletter
                </Button>
              </Link>
            </div>
          </div>
          <hr className="bg-blue-700 my-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
            <div>
              <FooterTitle title="FUSTIAB Info" />
              <FooterLinkGroup col className="pt-5">
                <FooterLink href="/about-fustiab" className="">About FUSTIAB</FooterLink>
                {/* <FooterLink href="/contact">Contact Us</FooterLink> */}
                <FooterLink href="/quotes">Fustiab Quotes</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <Link href="/africa">
                <FooterTitle title="Africa" />
              </Link>
              <FooterLinkGroup col className="pt-5">
                <FooterLink href="/technology">Technology</FooterLink>
                <FooterLink href="/business">Business</FooterLink>
                <FooterLink href="/game-changers">Game Changers</FooterLink>
                <FooterLink href="/recommendation">Recommendation</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Global" />
              <FooterLinkGroup col className="pt-5">
                <FooterLink href="/technology">Technology</FooterLink>
                <FooterLink href="/business">Business</FooterLink>
                <FooterLink href="/game-changers">Game Changers</FooterLink>
                <FooterLink href="/recommendation">Recommendation</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-300 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="/" by="FUSTIAB" year={2024} className="hover:font-bold" />
          </div>
  </footer>

      </>
  )
}

export default Footer
