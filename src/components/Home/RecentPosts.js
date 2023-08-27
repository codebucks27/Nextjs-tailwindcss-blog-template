import React from "react";
import Link from "next/link";
import { sortBlogs } from "@/src/utils";
import BlogLayoutThree from "../Blog/BlogLayoutThree";


const RecentPosts = ({ allBlogs }) => {
  const sortedBlogs = sortBlogs(allBlogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center dark:text-light">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold dark:font-medium capitalize  text-2xl md:text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-y-10 sm:gap-16 mt-10 sm:mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
