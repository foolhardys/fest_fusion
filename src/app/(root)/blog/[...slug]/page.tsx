import SingleBlog from "@/components/blog/SingleBlog";
import React from "react";

const SingleBlogPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-secondary">
      <div className="max-w-4xl mx-auto py-6">
        <SingleBlog />
      </div>
    </section>
  );
};

export default SingleBlogPage;
