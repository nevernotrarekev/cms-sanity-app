import react, { useState } from "react";
import CoverImage from "./cover-image";
import Link from "next/link";
import styles from "./projects-grid.module.scss";

export default function ProjectsGrid({
  name,
  posts,
  subtitleOne = "",
  subtitleTwo = "",
}) {
  const [projects, setProjects] = useState(posts);
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = [
    { name: "All", slug: "all" },
    { name: "Editorial", slug: "editorial" },
    { name: "Animation/VFX", slug: "animation-vfx" },
    { name: "Color", slug: "color" },
  ];
  const handleFilter = (filter) => {
    setActiveFilter(filter);

    if (filter === "all") {
      setProjects(posts);
    } else {
      setProjects(posts.filter((post) => post.type.includes(filter)));
    }
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row w-full">
        <div className={styles["project-header-grid"]}>
          <div>
            <div>
              <h1>{name || "Our Work"}</h1>
              <h2 className="text-carnation">{subtitleOne}</h2>
              <p style={{ fontWeight: "400" }}>{subtitleTwo}</p>
            </div>
          </div>
          <header className="ml-auto w-full flex start-col-mobile">
            <ul className="flex flex-row justify-end items-center flex-col-mobile">
              {filters &&
                filters.map((filter) => {
                  return (
                    <li
                      key={filter.slug}
                      className={`mx-3 ${styles.filter} ${
                        activeFilter.toUpperCase() ===
                          filter.name.toUpperCase() && styles["active-filter"]
                      }`}
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
      </div>

      <div></div>
      <div className="flex flex-wrap mt-8">
        {projects.map((post, index) => {
          return (
            <div key={post.title} className={styles.columns}>
              <Link
                legacyBehavior
                as={
                  post.slug?.current
                    ? `/posts/${post.slug?.current}`
                    : `/posts/${post.slug}`
                }
                href="/posts/[slug]"
              >
                <a className={styles.link}>
                  <div className={`relative ${styles.item}`}>
                    <CoverImage
                      isLink
                      index={index}
                      slug={post.slug}
                      image={post.coverImageWork}
                    />

                    <div
                      className={`${styles.title} transition duration-500 ease-in-out`}
                    >
                      <h3 className="text-3xl leading-snug">
                        <span className="font-bold">{post.brand}</span> /{" "}
                        {post.title}
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
