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
    ,
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
      ],
    },
  ]),
});
