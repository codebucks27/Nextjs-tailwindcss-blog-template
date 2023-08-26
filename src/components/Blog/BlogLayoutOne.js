import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";

const BlogLayoutOne = ({ blog }) => {
  return (
    <Link className="inline-block group overflow-hidden rounded-xl" href={blog.url}>
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl  z-10" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        alt={blog.title}
        className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-all ease duration-300"
      />

      <div className="absolute bottom-0 p-10 w-full z-20">
        <Tag
          name={blog.tags[0]}
          link={`/categories/${blog.tags[0]}`}
          className="px-6 text-sm py-2 !border"
        />s
        {/* <Link className="inline-block" href={blog.url}> */}
          <h2 className="mt-4 font-medium capitalize text-light text-2xl relative ">
            {/* {blog.title} */}
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
              {blog.title}
            </span>
          </h2>
        {/* </Link> */}
      </div>
    </Link>
  );
};

export default BlogLayoutOne;
