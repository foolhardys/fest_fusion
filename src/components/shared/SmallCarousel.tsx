import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { SmallCarouselCard } from './SmallCarouselCard'
import Link from 'next/link'
import { Button } from '../ui/button'

const SmallCarousel = () => {
    return (
        <div className='my-6'>
            <div className='flex justify-between my-2'>
                <h1 className="text-3xl text-gray-900 font-bold">Colleges</h1>
                <Link href='/'>
                    <Button variant='link' size='default' className='text-md font-medium text-gray-900 hover:text-gray-700'>View all</Button>
                </Link>
            </div>
            <div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/4 lg:basis-1/6 basis-1/2">
                            <SmallCarouselCard />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default SmallCarousel