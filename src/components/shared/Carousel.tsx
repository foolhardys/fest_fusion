import React from 'react'
import { CarouselContent, CarouselItem, Carousel } from '../ui/carousel'

const Carousel = () => {
  return (
// 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>

  )
}

export default Carousel