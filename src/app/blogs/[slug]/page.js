"use client";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import Tag from "@/src/components/Elements/Tag";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import { slug } from "github-slugger";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`blog not found for slug: ${params.slug}`);
  return { title: blog.title };
};

const mdxComponents = {
  Image,
};

const BlogLayout = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);

  // console.log(blog);

  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <article className=" py-0 ">
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-sm py-2 !border"
          />

          <h1 className=" group mt-6 font-semibold capitalize text-light text-5xl leading-tight relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className=" absolute top-0 left-0 bottom-0 right-0 h-full bg-dark/60" />
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
      </div>

      {/* <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0 prose"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      /> */}
    </article>
  );
};

export default BlogLayout;
