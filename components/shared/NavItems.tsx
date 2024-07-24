'use client';

import { navLinks } from '@/constants';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {navLinks.map((link) => {
        const isActive = pathname === link.path;
        
        return (
          <li
            key={link.path}
            className={`${
              isActive && 'text-slate-500'
            } flex-center p-medium-16 whitespace-nowrap  hover:font-bold`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems