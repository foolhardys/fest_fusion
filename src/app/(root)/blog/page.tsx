import BlogHero from "@/components/blog/BlogHero";
import HorizontalBlogCarousel from "@/components/blog/HorizontalBlogCarousel";
import SingleBlog from "@/components/blog/SingleBlog";
import VerticalBlogCarousel from "@/components/blog/VerticalBlogCarousel";
import React from "react";

const BlogPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-secondary">
      <BlogHero />
      <div className="flex gap-2 md:flex-row flex-col max-w-5xl mx-auto">
        <div className="w-3/5">
          <SingleBlog />
        </div>
        <div className="w-2/5 h-[130vh] overflow-hidden hidden md:block">
          <h1 className="text-primary text-2xl mb-4 text-center">
            Recent blogs
          </h1>
          <VerticalBlogCarousel />
        </div>
        <div className="w-2/5 h-[90vh] overflow-hidden md:hidden">
          <h1 className="text-primary text-2xl mb-4 text-center">
            Recent blogs
          </h1>
          <HorizontalBlogCarousel />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
