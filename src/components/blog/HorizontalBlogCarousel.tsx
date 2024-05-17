import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import image from "@/components/shared/assets/home-feat-blog-sample.png";
import BlogCarouselCard from "../shared/BlogCarouselCard";

const HorizontalBlogCarousel = () => {
  return (
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCarouselCard image={image} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
  );
};

export default HorizontalBlogCarousel;
