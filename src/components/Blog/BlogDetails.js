import { format, parseISO } from "date-fns"
import { slug } from "github-slugger"
import Link from "next/link"
import ViewCounter from "./ViewCounter"

const BlogDetails = ({blog, slug:blogSlug}) => {
  return (
    <div className="px-32  bg-accent text-light py-4 flex items-center justify-between text-xl font-medium dark:bg-accentDark dark:text-dark mx-10 rounded-lg">
           <time dateTime={blog.date} >
          {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <ViewCounter slug={blogSlug} />

        <div>{blog.readingTime.text}</div>
        <Link href={`/categories/${slug(blog.tags[0])}`}>#{slug(blog.tags[0])}</Link>

    </div>
  )
}

export default BlogDetails