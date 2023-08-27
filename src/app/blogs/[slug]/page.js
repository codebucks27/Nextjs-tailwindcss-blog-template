// "use client";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Tag from "@/src/components/Elements/Tag";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import { slug } from "github-slugger";
import siteMetadata from "@/src/utils/siteMetaData";
import RenderMdx from "@/src/components/Blog/RenderMdx";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.date).toISOString();
  const authors = blog?.author ? [blog.author] : siteMetadata.author;
  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes("http") ? img : siteMetadata.siteUrl + img,
    };
  });

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: siteMetadata.siteUrl + "/blogs/" + params.slug,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: imageList,
    },
  };
}

const BlogLayout = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.date).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.siteUrl,
      },
    ],
    description: blog.description,
  };

  // console.log(blog);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className=" py-0">
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-6 text-sm py-2"
            />

            <h1 className="inline-block group mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {blog.title}
            </h1>
          </div>
          <div className=" absolute top-0 left-0 bottom-0 right-0 h-full bg-dark/60 dark:bg-dark/40" />
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

        <BlogDetails blog={blog} slug={params.slug} />

        <div className="grid grid-cols-12 gap-y-8 lg:gap-8  sxl:gap-16 w-full mt-8 px-5 md:px-10">
          <div className=" col-span-12 lg:col-span-4  relative">
            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-base sm:text-lg font-semibold capitalize cursor-pointer">
                Table of contents
              </summary>
              <ul className="mt-4 font-in text-sm sm:text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        data-level={heading.level}
                        href={`#${heading.slug}`}
                        className="data-[level=two]:pl-0 w-full data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40  data-[level=three]:pl-4 sm:data-[level=three]:pl-6  flex items-center justify-start"
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}
                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>

        {/* <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0 prose"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      /> */}
      </article>{" "}
    </>
  );
};

export default BlogLayout;
