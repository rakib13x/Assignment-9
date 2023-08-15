import React from "react";
import getAllPost from "@/lib/getAllPost";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPost();
  return (
    <div>
      <section className="ml-6">
        <h1 className="font-bold text-lg border-b-2 border-black mt-8">
          Blog Post
        </h1>
        <div className="mt-6">
          {posts.map((post) => {
            return (
              <p className="pb-6 font-bold" key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  {post.id} : {post.title}
                </Link>
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
}
