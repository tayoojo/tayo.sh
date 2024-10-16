import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import {posts} from "#site/content";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0,3);
  return (<><section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-24">
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
        tayo.sh
      </h1>
      <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
        Welcome to my website
      </p>
      <div className="flex flex-col gap-4 justify-center sm:flex-row">
        <Link href="/blog" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}>
          View my Blog
        </Link>
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-fit")}>
          GitHub
        </Link>
      </div>
    </div>

  </section>
  <section className="container py-6 lg:py-10 flex flex-col space-y-6 mt-45">
    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center">
      Latest Posts
    </h3>
    <ul className="flex flex-col">
    {latestPosts.map(post => 
    <li key={post.slug} className="first:border-t first:border-border">
      <PostItem
      slug={post.slug}
      title={post.title}
      description={post.description}
      date={post.date} />
    </li>)}
    </ul>
  </section>
</>
  );
}

