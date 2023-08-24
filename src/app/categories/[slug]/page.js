"use client";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import GithubSlugger, {slug} from 'github-slugger'
import Categories from "@/src/components/Blog/Categories";
import Link from "next/link";
import { format } from "date-fns";

const slugger = new GithubSlugger()

export const generateStaticParams = async () => {

let categories = [];
let paths = [{params: "all"}];

allBlogs.map(blog => {
  if(blog.isPublished === true){
    blog.tags.map(tag => {

      let slugified = slugger.slug(tag);
      if(!categories.includes(slugified)){

        categories.push(slugified);
        paths.push({ params: { slug: slugified } })
      }
    })
  }
})

return { paths, fallback: false, }
}

// export const generateMetadata = ({ params }) => {
//   const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
//   if (!blog) throw new Error(`blog not found for slug: ${params.slug}`);
//   return { title: blog.title };
// };


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

            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-purple-800 dark:to-purple-900">
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-dark/50 font-semibold">{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}</span>

      </div>
    </div>
  );
};


const BlogLayout = ({ params }) => {

  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some(tag => {
      const slugified = slug(tag)
   
      if(!allCategories.includes(slugified)){
        allCategories.push(slugified)
      }
      if(params.slug === "all"){
        return true;
       }
     return slugified === params.slug
    });
  });
  if (!blogs) throw new Error(`Blogs not found for slug: ${params.slug}`);

  // const MDXContent = useMDXComponent(blog.body.code);

  return (
    <article className="mt-12 flex flex-col">
<div className="mx-32 flex flex-col">
<h1 className=" group mt-6 font-semibold  text-5xl leading-tight relative w-5/6">
            #{params.slug}
          </h1>
<span className="inline-block mt-2"> Discover more categories and expand your knowledge!</span>
</div>
<Categories categories={allCategories} active={params.slug}/>

<div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 mx-32">
        {blogs.map((blog, index) => <article key={index} className="col-span-1 row-span-1 relative">
          <BlogLayoutThree blog={blog} />
        </article>)}
        
      </div>

      {/* <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${blog.tags[0]}`}
            className="px-6 text-sm py-2 !border"
          />

          <h1 className=" group mt-6 font-semibold capitalize text-light text-5xl leading-tight relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className=" absolute top-0 left-0 bottom-0 right-0 h-full bg-dark/50" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          alt={blog.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <BlogDetails blog={blog} />

      <div className="grid grid-cols-12 gap-16 w-full mt-8">
        <div className="col-span-4 pl-10 relative">
          <details
            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table of contents
            </summary>
            <ul className="mt-4 font-medium dark:font-normal ">
              {blog.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      data-level={heading.level}
                      href={`#${heading.slug}`}
                      className="data-[level=two]:pl-0 w-full data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40  data-[level=three]:pl-6  flex items-center justify-start"
                    >
                      {heading.level === "three" ? <span className="flex w-1 h-1 rounded-full bg-dark mr-2">&nbsp;</span> : null}
                         <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>

        <div className="col-span-8 prose prose-lg dark:prose-invert max-w-screen-md first-letter:text-5xl 
        prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent
        ">
          <MDXContent components={mdxComponents} />
        </div>
      </div> */}

  
    </article>
  );
};

export default BlogLayout;
