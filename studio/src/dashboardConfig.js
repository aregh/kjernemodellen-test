export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607bfd71e680e15bcf438d93",
                  title: "Sanity Studio",
                  name: "kjernemodellen-test-studio",
                  apiId: "05a5fdf9-02af-4043-ba7b-44de94144bf9",
                },
                {
                  buildHookId: "607bfd71c7f1df29336ae715",
                  title: "Blog Website",
                  name: "kjernemodellen-test",
                  apiId: "ced421e1-5dc6-4070-a078-c6b183693bee",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aregh/kjernemodellen-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://kjernemodellen-test.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
