import react, { useState } from "react";
import PostPreview from "./post-preview";
import classNames from "classnames";
import styles from "./projects-grid.module.scss";

export default function ProjectsGrid({ posts }) {
  const [projects, setProjects] = useState(posts);
  const filters = [
    { name: "All", slug: "all" },
    { name: "Animation/VFX", slug: "animation-vfx" },
    { name: "Editorial", slug: "editorial" },
    { name: "Color", slug: "color" },
  ];
  const handleFilter = (filter) => {
    if (filter === "all") {
      setProjects(posts);
    } else {
      setProjects(posts.filter((post) => post.type === filter));
    }
  };
  return (
    <section>
      <div className="flex flex-col md:flex-row w-full py-12">
        <h1>Our Work</h1>
        <header className="ml-auto w-full flex">
          <ul className="flex flex-row justify-end items-center">
            {filters &&
              filters.map((filter) => {
                return (
                  <li
                    className="mx-3"
                    onClick={() => handleFilter(filter.slug)}
                  >
                    {filter.name}
                  </li>
                );
              })}
          </ul>
        </header>
      </div>
      <div className="flex flex-wrap">
        {projects.map((post, index) => {
          return (
            <div key={post.slug} className={styles.columns}>
              <PostPreview
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
