import react, { useState } from "react";
import PostPreview from "./post-preview";
import styles from "./featured.module.css";

export default function Featured({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-12 auto-rows-fr gap-5 auto-rows-max">
        {posts.map((post, index) => {
          return (
            <div key={post.slug} className={styles.gridItem}>
              <PostPreview
                index={index}
                title={post.title}
                brand={post.brand}
                coverImage={post.coverImage}
                slug={post.slug}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
