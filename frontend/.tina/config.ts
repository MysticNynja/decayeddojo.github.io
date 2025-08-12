import { defineConfig } from "tinacms";

export default defineConfig({
  // Required for Tina dev server to know where to write its admin bundle and find static assets
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // No Tina Cloud (git-based local editing)
  client: {
    branch: "main",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  schema: {
    collections: [
      {
        label: "Posts",
        name: "post",
        path: "public/content/posts",
        format: "md",
        ui: {
          defaultItem: {
            title: "New Post",
            author: "",
            date: new Date().toISOString(),
          },
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "author", label: "Author", options: ["SxySamurai", "MysticNynja", "DecayedDojo"] },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "rich-text", name: "body", label: "Body" },
        ],
      },
    ],
  },
});