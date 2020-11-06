import react, { useState } from "react";
import Link from "next/link";
import PostPreview from "./post-preview";
import styles from "./featured.module.scss";

export default function Featured({ posts }) {
  return (
    <section>
      <div className="flex flex-wrap">
        {posts.map((post, index) => {
          return (
            <div key={post.slug} className={styles.gridItem}>
              <PostPreview
                index={index}
                title={post.title}
                brand={post.brand}
                coverImage={post.coverImage}
                slug={post.slug}
                featured
              />
            </div>
          );
        })}
      </div>
      <div className="pt-10 pb-12 text-center">
        <Link href="/work">
          <a className="underline">View All</a>
        </Link>
      </div>
    </section>
  );
}
