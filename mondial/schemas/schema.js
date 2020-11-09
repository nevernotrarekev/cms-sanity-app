// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: "playitem",
      type: "document",
      title: "Play Item",
      fields: [
        {
          name: "vimeoid",
          title: "Vimeo Id",
          type: "string",
        },
        {
          name: "playImage",
          title: "Play Image",
          type: "image",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
        },
      ],
    },
    {
      name: "featuredItem",
      type: "document",
      title: "Featured Item",
      fields: [
        {
          name: "vimeoid",
          title: "Vimeo Id",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
      ],
    },
    {
      name: "page",
      type: "document",
      title: "Page",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
        },
        {
          name: "illo",
          title: "Illo",
          type: "image",
          options: {
            hotspot: true, // <-- Defaults to false,
            metadata: ["exif", "location", "lqip", "palette"],
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
        },
      ],
    },
    {
      name: "play",
      type: "document",
      title: "Play",
      fields: [
        {
          name: "pageTitle",
          title: "Page Title",
          type: "string",
        },
        {
          name: "items",
          title: "Items",
          type: "array",
          of: [
            {
              name: "item",
              title: "Item",
              type: "reference",
              to: [{ type: "playitem" }],
            },
          ],
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
        },
      ],
    },
    {
      name: "about",
      type: "document",
      title: "About",
      fields: [
        {
          name: "pageTitle",
          title: "Page Title",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
        },
        {
          name: "aboutSectionTitle",
          title: "About Section Title",
          type: "string",
        },
        {
          name: "aboutContent",
          title: "About Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "aboutImage",
          title: "About Image",
          type: "image",
          options: {
            hotspot: true, // <-- Defaults to false,
            metadata: ["exif", "location", "lqip", "palette"],
          },
          fields: [
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
        {
          name: "aboutImage2",
          title: "About Image 2",
          type: "image",
          options: {
            hotspot: true, // <-- Defaults to false,
            metadata: ["exif", "location", "lqip", "palette"],
          },
          fields: [
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
        {
          name: "aboutImage3",
          title: "About Image 3",
          type: "image",
          options: {
            hotspot: true, // <-- Defaults to false,
            metadata: ["exif", "location", "lqip", "palette"],
          },
          fields: [
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
        {
          name: "subsection1Title",
          title: "Subsection 1 Title",
          type: "string",
        },
        {
          name: "subsection1Content",
          title: "Subsection 1 Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "subsection2Title",
          title: "Subsection 2 Title",
          type: "string",
        },
        {
          name: "subsection2Content",
          title: "Subsection 2 Content",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "picture",
          title: "Picture",
          type: "image",
        },
      ],
    },
    {
      name: "post",
      type: "document",
      title: "Post",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "brand",
          title: "Brand",
          type: "string",
        },
        {
          name: "vimeoid",
          title: "Vimeo Id",
          type: "string",
        },
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Animation/VFX", value: "animation-vfx" },
              { title: "Editorial", value: "editorial" },
              { title: "Color", value: "color" },
            ],
          },
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "credits",
          title: "Credits",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "excerpt",
          title: "Excerpt",
          type: "string",
        },
        {
          name: "coverImage",
          title: "Cover Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "date",
          title: "Date",
          type: "datetime",
        },
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
        },
      ],
    },
  ]),
});
