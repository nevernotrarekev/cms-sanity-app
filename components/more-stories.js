import react, { useState } from "react";
import PostPreview from "../components/post-preview";
import classNames from "classnames";

export default function MoreStories({ posts }) {
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
      // const projectNodes =
      //   data &&
      //   data.projects &&
      //   mapEdgesToNodes(data.projects)
      //     .filter(filterOutDocsWithoutSlugs)
      //     .filter((project) => project.type === filter);
      setProjects(posts.filter((post) => post.type === filter));
    }
  };
  return (
    <section>
      <ul className="flex flex-row">
        {filters &&
          filters.map((filter) => {
            return (
              <li className="mx-3" onClick={() => handleFilter(filter.slug)}>
                {filter.name}
              </li>
            );
          })}
      </ul>
      <div className="grid grid-cols-12 gap-5 auto-rows-max">
        {projects.map((post, index) => {
          var columns = classNames({
            "col-span-12": index % 6 === 0,
            "col-span-7": index === 1,
            "col-span-5": index === 2,
          });
          return (
            <div key={post.slug} className={columns}>
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
