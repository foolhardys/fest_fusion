import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import BlogCarouselCard from './BlogCarouselCard'
import image from '@/components/shared/assets/home-feat-blog-sample.png'

const BlogCarousel = () => {
    return (
        <div className='my-6'>
            <div className='flex justify-between my-4'>
                <h1 className="text-3xl text-black font-bold justify-self-center self-center">Featured Blogs</h1>
                <Link href='/'>
                    <Button variant='link' size='default' className='text-md font-medium text-gray-900 hover:text-gray-700'>View all</Button>
                </Link>
            </div>
            <div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3 basis-1">
                            <BlogCarouselCard image={image} />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default BlogCarousel