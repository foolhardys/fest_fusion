import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import Image from 'next/image'

const BlogCarouselCard = ({ image }: any) => {
    return (
        <Card className="rounded-md w-100 h-80 flex flex-col items-center justify-center bg-card/0 outline-none border-none">
            <CardContent>
                <Image src={image} alt="logo" className='rounded-md h-full w-full'/>
            </CardContent>
            <CardFooter>
                <p className='text-sm font-normal'>Guru Randhawa graces Mood Indigo festival at
                    IIT BOMBAY to promote latest song </p>
            </CardFooter>
        </Card>
    )
}

export default BlogCarouselCard