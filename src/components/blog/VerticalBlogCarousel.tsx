import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import BlogCarouselCard from "../shared/BlogCarouselCard";
import image from "@/components/shared/assets/home-feat-blog-sample.png";

const VerticalBlogCarousel = () => {
  return (
    <Carousel orientation="vertical">
      <CarouselContent>
        <CarouselItem>
          <BlogCarouselCard image={image} />
        </CarouselItem>
        <CarouselItem>
          <BlogCarouselCard image={image} />
        </CarouselItem>
        <CarouselItem>
          <BlogCarouselCard image={image} />
        </CarouselItem>
        <CarouselItem>
          <BlogCarouselCard image={image} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default VerticalBlogCarousel;
