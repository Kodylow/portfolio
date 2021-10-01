export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "inspiration",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "technologies",
      type: "string",
    },
    {
      name: "github",
      type: "url",
      title: "Github Repo",
    },
    {
      name: "youtube",
      type: "url",
      title: "YouTube video URL",
    },
  ],
};
