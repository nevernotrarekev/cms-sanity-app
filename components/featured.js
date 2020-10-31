import react, { useState } from "react";
import PostPreview from "./post-preview";
import classNames from "classnames";

export default function Featured({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-12 gap-5 auto-rows-max">
        {posts.map((post, index) => {
          var columns = classNames({
            "col-span-12": index % 6 === 0,
            "col-span-7": index === 1,
            "col-span-5": index === 2,
          });
          return (
            <div key={post.slug} className={columns}>
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
