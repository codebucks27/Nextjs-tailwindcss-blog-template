import { allBlogs } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";
import Categories from "@/src/components/Blog/Categories";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  let categories = [];
  let paths = [{ params: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished === true) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ params: { slug: slugified } });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert blogs and tutorials.`,
  };
}

const Category = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);

      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  if (!blogs) throw new Error(`Blogs not found for slug: ${params.slug}`);

  return (
    <article className=" mt-8 sm:mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className=" group mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight relative w-5/6">
          #{params.slug}
        </h1>
        <span className="inline-block mt-2">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} active={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-y-10 sm:gap-16 mt-16 md:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default Category;
