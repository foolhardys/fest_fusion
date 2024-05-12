"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import image from '@/components/shared/assets/no_branding_black.png'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { HamburgerMenuIcon, Cross1Icon, SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
    const { setTheme } = useTheme()
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className='h-[80px] bg-blue-300 flex lg:hidden items-center z-50 justify-between p-2 mb-5 sticky top-0 shadow-md'>
            <Link href='/'>
                <Image src={image} alt="logo" width={70} height={70} />
            </Link>
            <div className='flex gap-2 items-center justify-center'>
                <div className='flex items-center justify-center p-2'>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                    </SignedIn>
                </div>
                <div className='flex items-center justify-center'>
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
                <div className='flex items-center justify-center gap-1'>
                    {
                        !isMenuOpen && (
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='hover:rotate-12'
                            >
                                <HamburgerMenuIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 bg-secondary" />
                            </Button>
                        )
                    }
                </div>
            </div>
            <div className={`flex gap-4 bg-card p-4 flex-col items-center justify-center absolute top-0 -right-20 transition h-screen md:w-1/2 w-full ${isMenuOpen ? 'flex absolute top-0 right-0 z-10  duration-1000' : 'hidden'}`}>
                <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='absolute top-4 right-4 hover:rotate-12'
                >
                    <Cross1Icon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 bg-destructive" />
                </Button>
                <ul className='flex flex-col gap-4 items-center justify-center'>
                    {
                        navLinks.map((link) => {
                            const isActive = link.route === pathname
                            return (
                                <li
                                    key={link.route}
                                    className={` p-2 rounded-md transition hover:bg-primary/90 min-w-16 text-center text-gray-900 dark:text-white text-2xl ${isActive ? 'bg-secondary text-gray-900 dark:text-white font-bold' : 'text-secondary font-semibold'
                                        }`}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <Link href={link.route}>
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <SignedOut>
                        <Button variant="default" size='lg' className='text-2xl' asChild>
                            <Link href='/sign-in'>Login</Link>
                        </Button>
                    </SignedOut>
                </ul>
            </div>
        </nav>
    )
}

export default MobileNav