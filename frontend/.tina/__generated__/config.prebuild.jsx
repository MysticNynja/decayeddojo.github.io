// .tina/config.ts
import { defineConfig } from "tinacms";
function slugify(input) {
  return (input || "").toString().trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}
var config_default = defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  client: {
    branch: "main"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images"
    }
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
            date: (/* @__PURE__ */ new Date()).toISOString()
          },
          // Make the filename follow the title (slug) automatically
          filename: {
            slugify: (values) => slugify(values?.title || "untitled")
          },
          router: ({ document }) => `/blog/${document._sys.filename}`
        },
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "author", label: "Author", options: ["SxySamurai", "MysticNynja", "DecayedDojo"] },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
