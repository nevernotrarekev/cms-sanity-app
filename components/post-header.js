import PostTitle from "../components/post-title";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./post-header.module.scss";

import { imageBuilder } from "../lib/sanity";

export default function PostHeader({
  title,
  brand,
  coverImage,
  vimeoid,
  type,
}) {
  return (
    <div className={styles.header}>
      <div
        className="flex  lg:flex-row post-header-row items-end "
        style={{ marginBottom: "25px" }}
      >
        <PostTitle>
          <b>{brand}</b> / {title}
        </PostTitle>
        <div className={styles.tag}>{type && type.length && type.join(" / ") || type}</div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {!vimeoid ? (
          <img
            alt={title ? `Cover Image for ${title}` : undefined}
            src={imageBuilder.image(coverImage).url()}
            style={{ width: "100%" }}
          />
        ) : (
          <Vimeo
            className="embed-responsive aspect-w-16 aspect-h-9"
            video={vimeoid}
          />
        )}
      </div>
    </div>
  );
}
