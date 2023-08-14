import Image from "next/image";
import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { sortBlogs } from "@/src/utils";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="flex flex-col items-center">
     
     <div className="h-full">
     <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        alt={blog.title}
        className="aspect-[4/3] w-full h-full object-cover object-center rounded-xl"
      />
     </div>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent font-medium text-sm">{blog.tags[0]}</span>
        <Link className=" inline-block" href={blog.url}>
          <h2 className=" group my-2 font-semibold capitalize text-dark text-lg relative ">
            {/* {blog.title} */}

            <span class="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-purple-800 dark:to-purple-900">
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-dark/50 font-semibold">{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}</span>

      </div>
    </div>
  );
};

const RecentPosts = ({allBlogs}) => {
  const sortedBlogs = sortBlogs(allBlogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
      <h2 className="inline-block font-bold capitalize text-4xl">
        Recent Posts
      </h2>
      <Link href="/categories/all" className="inline-block font-medium text-accent underline underline-offset-2 text-lg" >View all</Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4,10).map((blog, index) => <article key={index} className="col-span-1 row-span-1 relative">
          <BlogLayoutThree blog={blog} />
        </article>)}
        
      </div>
    </section>
  );
};

export default RecentPosts;
