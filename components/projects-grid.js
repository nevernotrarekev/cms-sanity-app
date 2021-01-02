import react, { useState } from "react";
import CoverImage from "./cover-image";
import Link from "next/link";
import styles from "./projects-grid.module.scss";

export default function ProjectsGrid({ posts }) {
  const [projects, setProjects] = useState(posts);
  const filters = [
    { name: "All", slug: "all" },
    { name: "Editorial", slug: "editorial" },
    { name: "Animation/VFX", slug: "animation-vfx" },
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
      <div className="flex flex-col md:flex-row w-full">
        <h1>Our Work</h1>
        <header className="ml-auto w-full flex start-col-mobile">
          <ul className="flex flex-row justify-end items-center flex-col-mobile">
            {filters &&
              filters.map((filter) => {
                return (
                  <li
                    key={filter.slug}
                    className={`mx-3 ${styles.filter}`}
                    onClick={() => handleFilter(filter.slug)}
                    style={{ cursor: "pointer", letterSpacing: ".045rem" }}
                  >
                    {filter.name}
                  </li>
                );
              })}
          </ul>
        </header>
      </div>
      <div className="flex flex-wrap mt-8">
        {projects.map((post, index) => {
          return (
            <div key={post.slug} className={styles.columns}>
              <Link as={`/posts/${post.slug.current}`} href="/posts/[slug]">
                <a className={styles.link}>
                  <div className={`relative h-full bg-navy ${styles.item}`}>
                    <CoverImage
                      isLink
                      index={index}
                      slug={post.slug}
                      image={post.coverImageWork}
                    />

                    <div className={styles.title}>
                      <h3 className="text-3xl leading-snug">
                        <span className="font-bold">{post.title}</span> /{" "}
                        {post.brand}
                      </h3>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
