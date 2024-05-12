import React from 'react'
import image from '@/components/shared/assets/small_no_background_black.png'
import Image from 'next/image'
import { footerLegal, footerNavLinks, footerServices, footerSocialLinks } from '@/constants'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-blue-300 md:h-[280px] h-full flex flex-col py-5'>
      <div className='md:max-w-3xl w-full md:mx-auto h-full flex md:flex-row flex-col md:items-center items-start px-6 justify-between'>
        <div className='mx-auto md:mx-0'>
          <Image src={image} width={300} height={300} alt="logo" />
          <div>
            <ul className='flex gap-4 items-center justify-center mt-4 p-2'>
              <li>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <TwitterLogoIcon className="h-[1.8rem] w-[1.8rem] text-gray-600" />
                </a>
              </li>
              <li>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <InstagramLogoIcon className="h-[1.8rem] w-[1.8rem] text-gray-600" />
                </a>
              </li>
              <li>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon className="h-[1.8rem] w-[1.8rem] text-gray-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='h-[70%]'>
          <h1 className='text-gray-900 text-2xl font-semibold mb-2'>Explore</h1>
          <ul className='flex flex-col gap-1'>
            {
              footerNavLinks.map((link) => {
                return (
                  <li key={link.route}>
                    <Link href={link.route} className='text-gray-900 text-md font-normal hover:underline'>
                      {link.label}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='h-[70%]'>
          <h1 className='text-gray-900 text-2xl font-semibold mb-2'>Service</h1>
          <ul className='flex flex-col gap-1'>
            {
              footerServices.map((link) => {
                return (
                  <li key={link.route}>
                    <Link href={link.route} className='text-gray-900 text-md font-normal hover:underline'>
                      {link.label}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='h-[70%]'>
          <h1 className='text-gray-900 text-2xl font-semibold mb-2'>Legal</h1>
          <ul className='flex flex-col gap-1'>
            {
              footerLegal.map((link) => {
                return (
                  <li key={link.route}>
                    <Link href={link.route} className='text-gray-900 text-md font-normal hover:underline'>
                      {link.label}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <p className='text-gray-900 text-lg font-light mx-auto my-2'>© Copyright 2024 FestFusion.</p>
    </div>
  )
}

export default Footer