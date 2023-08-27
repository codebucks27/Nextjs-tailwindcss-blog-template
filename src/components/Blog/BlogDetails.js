import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className=" px-2 md:px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium dark:bg-accentDark dark:text-dark mx-5 md:mx-10 rounded-lg">
      <time dateTime={blog.date} className="m-3 text-center">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <ViewCounter slug={blogSlug} />

      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{slug(blog.tags[0])}
      </Link>
    </div>
  );
};

export default BlogDetails;
