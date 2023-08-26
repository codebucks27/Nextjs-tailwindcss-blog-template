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
    <article className="px-10 w-full relative ">
      <div className=" absolute top-0 left-10 bottom-0 right-10 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl dark:shadow-light/30 dark:shadow-sm" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        alt={blog.title}
        className="w-full h-[85vh] object-cover object-center rounded-3xl"
      />

      <div className="absolute bottom-0 p-16 w-3/4">
        <Tag name={blog.tags[0]} link={`/categories/${slug(blog.tags[0])}`} />
        <Link className=" inline-block" href={blog.url}>
          <h1 className=" group mt-6 font-bold capitalize text-light text-4xl relative ">
            {/* {blog.title} */}

            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
              {blog.title}
            </span>
          </h1>
        </Link>
        <p className="mt-4 text-light text-xl font-in">{blog.description}</p>
      </div>
    </article>
  );
};

export default HomeCoverSection;
