import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "ავტორი",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "სახელი",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "ბმული",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "ფოტო",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "აღწერა",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
