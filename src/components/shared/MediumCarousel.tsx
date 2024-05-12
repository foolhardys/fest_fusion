import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import MediumCarouselCard from './MediumCarouselCard'

const MediumCarousel = () => {
  return (
    <div className='my-6'>
            <div className='flex justify-between my-2'>
                <h1 className="text-3xl text-gray-900 font-bold">Events</h1>
                <Link href='/'>
                    <Button variant='link' size='default' className='text-md font-medium text-gray-900 hover:text-gray-700'>View all</Button>
                </Link>
            </div>
            <div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4 basis-1">
                            <MediumCarouselCard />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
  )
}

export default MediumCarousel