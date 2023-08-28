import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="flex flex-col items-center text-dark dark:text-light group">
      <Link className="h-full rounded-xl overflow-hidden" href={blog.url} aria-label={`Blog link for blog.title`}>
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          alt={blog.title}
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          className="aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <Link className=" inline-block" href={blog.url}>
          <h2 className=" group my-2 font-semibold capitalize text-base sm:text-lg relative ">
            {/* {blog.title} */}

            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-dark/50 dark:text-light/50 font-semibold text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
