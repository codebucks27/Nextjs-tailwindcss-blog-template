import Image from "next/image";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { sortBlogs } from "@/src/utils";
import { slug } from "github-slugger";

const HomeCoverSection = ({ allBlogs }) => {
  const sortedBlogs = sortBlogs(allBlogs);
  const blog = sortedBlogs[0];
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);

  return (
    <article className="flex flex-col items-start justify-end mx-5 sm:mx-10  relative h-[70vh] sm:h-[85vh]">
      <div className=" absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl dark:shadow-light/30 dark:shadow-sm z-0" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        // width={blog.image.width}
        // height={blog.image.height}
        alt={blog.title}
        fill
        className="w-full h-full object-cover object-center rounded-3xl -z-10"
        priority
        sizes="100vw"
      />

      <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center  z-0">
        <Tag name={blog.tags[0]} link={`/categories/${slug(blog.tags[0])}`} />
        <Link className="  mt-3  sm:mt-6 inline-block" href={blog.url}>
          <h1 className=" group  font-bold capitalize text-light text-lg sm:text-xl md:text-3xl lg:text-4xl relative ">
            {/* {blog.title} */}

            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
              {blog.title}
            </span>
          </h1>
        </Link>
        <p className="hidden sm:inline-block mt-4 text-light text-base md:text-lg lg:text-xl font-in">{blog.description}</p>
      </div>
    </article>
  );
};

export default HomeCoverSection;
