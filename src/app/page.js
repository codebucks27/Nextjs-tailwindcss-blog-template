import FeaturedPosts from "../components/Home/FeaturedPosts";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import { allBlogs } from "contentlayer/generated";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HomeCoverSection allBlogs={allBlogs}/>
      <FeaturedPosts allBlogs={allBlogs}/>
      <RecentPosts allBlogs={allBlogs}/>

    </main>
  );
}
