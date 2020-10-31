import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function CoverImage({ index, title, image }) {
  console.log(image);
  const builtImage = (
    <img
      alt={`Cover Image for ${title}`}
      src={imageBuilder.image(image).width(1200).height(400).url()}
    />
  );

  return <div className="">{builtImage}</div>;
}
