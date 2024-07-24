
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BsFacebook,BsInstagram, BsLinkedin, BsPinterest, BsReddit, BsTwitter } from "react-icons/bs";
import { FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import EmailSubscribe from '../contact/EmailSubscribe';


const Footer = () => {
  return (
    <>
    <footer className="bg-primary-50 text-black bg-dotted-pattern bg-cover bg-center p-20 w-full">
      <div className="flex flex-row flex-between ">
        <div className="">
          <Link href="/" className="">
                <Image
                src="/assets/images/fustiab.svg" 
                width={128} 
                height={38}
                alt="FUSTIAB Logo"
                />
          </Link>
          
          </div>
          <div className="">
            <h3 className="font-extrabold text-xl text-orange-600 items-center mx-20 p-2">Follow us</h3>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="https://www.facebook.com/profile.php?id=61558698158377" icon={BsFacebook} />
              <FooterIcon href="https://twitter.com/FuSTIAB" icon={BsTwitter} />
              <FooterIcon href="https://www.linkedin.com/company/fustiab/" icon={BsLinkedin} />
              <FooterIcon href="https://www.pinterest.com/fustiab/" icon={BsPinterest} />
      
              
            </div>
          </div>
        <div className="">
          <EmailSubscribe/>
        </div>

      </div>
      <hr className="bg-blue-700"/>
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
      <div>
            <FooterTitle title="FUSTIAB Info" />
            <FooterLinkGroup col>
              <FooterLink href="/about-fustiab">Who We Are?</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Technology" />
            <FooterLinkGroup col>
              <FooterLink href="#">Artificial Intelligence</FooterLink>
              <FooterLink href="#">Telecommunication</FooterLink>
              <FooterLink href="#">Space Technology</FooterLink>
              <FooterLink href="#">Cloud Computing</FooterLink>
              <FooterLink href="#">Computer and Electronics</FooterLink>
              <FooterLink href="#">Algorithms</FooterLink>
            </FooterLinkGroup>
          </div>
          
          <div>
            <FooterTitle title="Business" />
            <FooterLinkGroup col>
              <FooterLink href="#">StartUp</FooterLink>
              <FooterLink href="#">Big Companies</FooterLink>
              <FooterLink href="#">Business study</FooterLink>
              <FooterLink href="#">Money</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Game Changers" />
            <FooterLinkGroup col>
              <FooterLink href="#">Inventor</FooterLink>
              <FooterLink href="#">Founders</FooterLink>
              <FooterLink href="#">Investors</FooterLink>
              <FooterLink href="#">Engineers</FooterLink>
              <FooterLink href="#">Scientists</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <hr className="bg-blue-700"/>
        <div className="flex flex-row">
          <div className="">Policy</div>
          <div className="">
            <p className='text-center'><Link href="/quotes">Fustiab Daily Quotes</Link></p>   
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="FuSTIAB" year={2024} className="hover:font-bold"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
            <div className="hover:font-extrabold"><Link href="/about-fustiab">About FuSTIAB</Link></div>
            <div className="hover:font-extrabold"><Link href="/contact">Contact Us</Link></div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
