import Image from 'next/image'
import React from 'react'
import image from '@/components/shared/assets/small_no_background_black.png'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '../ui/label'

const ContactForm = () => {
    return (
        <article className='max-w-3xl mx-auto bg-blue-300 min-h-[280px] rounded-md flex md:flex-row flex-col-reverse gap-2 items-center justify-center'>
            <div>
                <Image src={image} width={450} height={450} alt="logo" />
            </div>
            <div className="flex flex-col w-full space-y-2 bg-background min-h-[280px] justify-center p-4 rounded-md">
                <div>
                    <h1 className='text-gray-900 dark:text-white text-xl font-medium'>Get in touch!</h1>
                    <p className='text-gray-900 dark:text-white text-sm'>Stay up-to-date with the latest events with us every time !</p>
                </div>
                <Label htmlFor="email" className='text-gray-900  dark:text-white'>Email</Label>
                <div className='flex w-full items-center space-x-2'>
                    <Input type="email" className='min-w-[250px]' placeholder="Email" />
                    <Button variant='outline' type="submit">Subscribe</Button>
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>Enter your email adress</p>
                </div>
                <div>
                    <p className='text-gray-900  dark:text-white font-semibold text-sm'>By signing up for the newsletter, you agree to our <a className='text-blue-700 hover:underline transition' href="" target="_blank" rel="noopener noreferrer"> Terms of Service and Privacy Policy</a> .</p>
                </div>
            </div>
        </article>
    )
}

export default ContactForm