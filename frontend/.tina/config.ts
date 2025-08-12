import { defineConfig } from "tinacms";

// Git-based local content editing. In this environment, Tina Admin will work when running locally with `yarn tina:dev`.
export default defineConfig({
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
        path: "content/posts",
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