import { defineConfig } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.REACT_APP_TINA_CLIENT_ID!,
  token: process.env.REACT_APP_TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            label: "Content",
            name: "body",
            type: "rich-text",
            isBody: true,
            templates: [
              {
                name: "Heading",
                label: "Heading",
                fields: [
                  {
                    type: "string",
                    name: "heading_text",
                    label: "Heading Text",
                  },
                ],
              },
              {
                name: "Blockquote",
                label: "Blockquote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text",
                  },
                  {
                    name: "author",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
              {
                name: "Image",
                label: "Image",
                fields: [
                  {
                    name: "src",
                    label: "Image Source",
                    type: "image",
                  },
                  {
                    name: "alt",
                    label: "Alt Text",
                    type: "string",
                  },
                ],
              },
              {
                name: "TextBlock",
                label: "TextBlock",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your needs
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});