import react, { useState } from "react";
import CoverImage from "./cover-image";
import Link from "next/link";
import styles from "./projects-grid.module.scss";
import classNames from "classnames";

export default function ProjectsGrid({
  name,
  posts,
  subtitleOne,
  subtitleTwo,
  showFilters = true,
}) {
  const [projects, setProjects] = useState(posts);
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = [
    { name: "All", slug: "all" },
    { name: "Editorial", slug: "editorial" },
    { name: "VFX/Animation", slug: "animation-vfx" },
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
      <div className={classNames("flex-col md:flex-row w-full", showFilters ? 'flex' : 'hidden')}>
        <div className={classNames(styles["project-header-grid"])}>
          <div>
            {name && <h1>{name}</h1>}
            {subtitleOne && <h2 className="text-carnation">{subtitleOne}</h2>}
            {subtitleTwo && <p className="font-[400] text-balance">{subtitleTwo}</p>}
          </div>
          <header>
            <ul className="flex flex-row justify-end items-center flex-col-mobile gap-0 md:gap-3">
              {filters &&
                filters.map((filter) => {
                  return (
                    <li
                      key={filter.slug}
                      className={`${styles.filter} ${activeFilter.toUpperCase() ===
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
