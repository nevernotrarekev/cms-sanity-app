import CoverImage from "./cover-image";
import Link from "next/link";
import cn from "classnames";
import styles from "./post-preview.module.scss";
import react, { useState } from "react";

import Vimeo from "@u-wave/react-vimeo";

const PostPreviewItem = ({ video, slug, coverImage, title, brand }) => {
  const [play, setPlay] = useState(false);

  const handleMouseOver = (shouldPlay) => {
    setPlay(shouldPlay);
  };

  const renderVideo = () => (
    <div
      onMouseOver={() => handleMouseOver(true)}
      onMouseOut={() => handleMouseOver(false)}
      className={`relative h-full ${styles["video-container"]}`}
    >
      {!video ? (
        <CoverImage isLink index={index} slug={slug} image={coverImage} />
      ) : (
        <>
          <Vimeo video={video} background autoplay loop />

          <div
            className={`${styles["video-cover"]} ${play && styles["reveal"]}`}
          >
            <Vimeo video={video} controls={false} />
          </div>
        </>
      )}
      <div className={`${styles.title}  transition duration-500 ease-in-out`}>
        <h3 className="text-3xl leading-snug">
          <span className="font-bold">{brand}</span> / {title}
        </h3>
      </div>
    </div>
  );

  return renderVideo();
};

export default function PostPreview({
  index,
  title,
  brand,
  coverImage,
  slug,
  featured,
  vimeo,
}) {
  const classes = {
    link: `block h-full ${styles["post-preview"]} ${
      featured && styles.featured
    }`,
  };

  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className={classes.link}>
        <PostPreviewItem
          video={vimeo}
          slug={slug}
          coverImage={coverImage}
          title={title}
          brand={brand}
        />
      </a>
    </Link>
  );
}
