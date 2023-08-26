import React from "react";
import Link from "next/link";
import { sortBlogs } from "@/src/utils";
import BlogLayoutThree from "../Blog/BlogLayoutThree";


const RecentPosts = ({ allBlogs }) => {
  const sortedBlogs = sortBlogs(allBlogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center dark:text-light">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold dark:font-medium capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-lg"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
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
