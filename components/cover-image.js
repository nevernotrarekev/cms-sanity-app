import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function CoverImage({ title, url }) {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      src={imageBuilder.image(url).height(1000).width(2000).url()}
    />
  );

  return <div className="">{image}</div>;
}
