import React from "react";
import { sortBlogs } from "@/src/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";




const FeaturedPosts = ({allBlogs}) => {
  const sortedBlogs = sortBlogs(allBlogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center dark:text-light">
      <h2 className="w-full inline-block font-bold dark:font-medium capitalize text-2xl md:text-4xl">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]}/>
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1"> <BlogLayoutTwo blog={sortedBlogs[2]}/></article>
        <article className="col-span-2 sm:col-span-1 row-span-1"><BlogLayoutTwo blog={sortedBlogs[3]}/></article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
