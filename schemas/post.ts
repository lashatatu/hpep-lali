import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "პოსტი",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "სათაური",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "ბმული",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      description: "აღწერა",
      title: "აღწერა",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "ავტორი",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "მთავარი სურათი",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "კატეგორია",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "გამოქვეყებულია",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "ტექსტი",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
