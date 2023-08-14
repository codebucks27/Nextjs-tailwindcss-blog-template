import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from 'rehype-pretty-code';
import GithubSlugger from "github-slugger"
import readingTime from "reading-time";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: { type: "string", required: true },
    image: { type: "image" },
    isPublished: {
      type: "boolean",
      default: false,
    },
    author: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blogs/${post._raw.flattenedPath}`,
    },
    toc: {
      type: "json",
      resolve: async(post) => {

        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger()
        const headings = Array.from(post.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag?.length == 1 ? "one"
              : flag?.length == 2 ? "two"
              : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined
            };
          }
        );

        return headings;
      }
  },
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw)
  },
}
}));


const codeOptions = {
  theme: 'github-dark',
  // theme:{
  //   dark: 'github-dark',
  //   light: 'github-light',
  // }
}

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior :"append"}], [rehypePrettyCode, codeOptions]] },
});
