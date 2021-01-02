import Link from "next/link";
import PostPreview from "./post-preview";
import styles from "./featured.module.scss";
import IconArrow from "./icon-arrow";
import cn from "classnames";

export default function Featured({ posts }) {
  return (
    <section>
      <div className="flex flex-wrap">
        {posts.map((post, index) => {
          console.log(post);
          return (
            <div key={post._id} className={styles.gridItem}>
              <PostPreview
                index={index}
                title={post.title}
                brand={post.brand}
                coverImage={post.coverImage}
                slug={post.slug.current}
                vimeo={post.looping_vimeoid}
                featured
              />
            </div>
          );
        })}
      </div>
      <div className="pb-12 text-center">
        <Link href="/work">
          <a className={styles.link}>
            <div className={styles.linkInnerWrap}>
              <div className={cn("text-carnation", styles.linkText)}>
                View All
              </div>
              <IconArrow />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
