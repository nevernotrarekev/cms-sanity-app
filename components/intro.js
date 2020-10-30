import cn from "classnames";
import { imageBuilder } from "../lib/sanity";

export default function Intro({ text, image }) {
  const illo = (
    <img
      alt={`Intro section Illustration of two men fighting near a portal`}
      src={imageBuilder.image(image).height(1000).width(2000).url()}
    />
  );
  return (
    <section className="grid grid-cols-12 flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h4 className="col-span-5 text-center md:text-left text-lg mt-10">
        {text}
      </h4>
      <div className="col-start-8 col-span-5">{illo}</div>
    </section>
  );
}
