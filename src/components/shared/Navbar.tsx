"use client"

import Image from 'next/image'
import React from 'react'
import image from '@/components/shared/assets/no_background.png'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme()
  return (
    <nav className='bg-blue-300 px-32 h-[80px] shadow-md sticky top-0 z-50 lg:flex hidden justify-between items-center'>
      <div>
        <Link href='/'>
          <Image src={image} width={180} height={50} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className='flex gap-4 items-center'>
          {
            navLinks.map((link) => {
              const isActive = link.route === pathname
              return (
                <li key={link.route} className={`bg-primary p-1 rounded-md transition hover:bg-primary/90 min-w-16 text-center ${isActive ? 'bg-secondary text-gray-900 dark:text-white font-bold' : 'text-secondary font-semibold'
                  }`}>
                  <Link href={link.route}>
                    {link.label}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='flex gap-4 items-center'>
        <div className=' flex items-center justify-center p-3'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <Button variant="outline" size='default' asChild>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-2  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className='w-20 flex flex-col gap-1 shadow-md p-2 bg-secondary/70 rounded-lg mt-1 transition'>
              <DropdownMenuItem className='text-center cursor-pointer' onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem className='text-center cursor-pointer' onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem className='text-center cursor-pointer' onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar