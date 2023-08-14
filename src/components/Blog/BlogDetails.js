import { format, parseISO } from "date-fns"
import { slug } from "github-slugger"
import Link from "next/link"

const BlogDetails = ({blog}) => {
  return (
    <div className="px-32 border-t-2 bg-dark text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-center justify-between text-xl font-medium  dark:text-light mx-10 rounded-lg">
           <time dateTime={blog.date} >
          {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <div>1537 views</div>
        <div>{blog.readingTime.text}</div>
        <Link href={`/categories/${slug(blog.tags[0])}`}>#{slug(blog.tags[0])}</Link>

    </div>
  )
}

export default BlogDetails