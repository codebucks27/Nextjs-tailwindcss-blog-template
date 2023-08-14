import Image from "next/image";
import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { format } from "date-fns";
import { sortBlogs } from "@/src/utils";

const BlogLayoutOne = ({ blog }) => {
  return (
    <>
      <div className=" absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        alt={blog.title}
        className="w-full h-full object-cover object-center rounded-xl"
      />

      <div className="absolute bottom-0 p-10 w-full">
        <Tag name={blog.tags[0]} link={`/categories/${blog.tags[0]}`}  className="px-6 text-sm py-2 !border" />
        <Link className=" inline-block" href={blog.url}>
          <h2 className=" group mt-4 font-medium capitalize text-light text-2xl relative ">
            {/* {blog.title} */}

            <span class="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-purple-800 dark:to-purple-900">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </>
  );
};

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
     
     <div className="col-span-4 h-full">
     <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        alt={blog.title}
        className="aspect-square w-full h-full object-cover object-center rounded-xl"
      />
     </div>

      <div className="col-span-8 w-full">
        <span className="uppercase text-accent font-medium text-sm">{blog.tags[0]}</span>
        <Link className=" inline-block" href={blog.url}>
          <h2 className=" group my-1 font-semibold capitalize text-dark text-lg relative ">
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
const FeaturedPosts = ({allBlogs}) => {
  const sortedBlogs = sortBlogs(allBlogs);
  return (
    <section className="w-full mt-32 min-h-screen px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]}/>
        </article>
        <article className="col-span-1 row-span-1"> <BlogLayoutTwo blog={sortedBlogs[2]}/></article>
        <article className="col-span-1 row-span-1"><BlogLayoutTwo blog={sortedBlogs[3]}/></article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
