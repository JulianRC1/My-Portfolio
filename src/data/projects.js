export const projects = [
  {
    id: 1,
    title: "UV Agent",
    description:
      "A retrieval-augmented and agent-based system designed to answer undergraduate student procedure questions using institutional documentation.",
    image: "/uv-agent-page.png",

    tags: [
      "Python",
      "LangGraph",
      "RAG",
      "NLP",
    ],

    github: [
      {
        label: "Frontend Repository",
        url: "https://github.com/JuanLoaiza007/uv-agent-frontend",
      },
      {
        label: "Backend Repository",
        url: "https://github.com/JuanLoaiza007/uv-agent-backend",
      },
      {
        label: "Evaluation",
        url: "https://colab.research.google.com/drive/11VE_RqLV5cmr_DnG1gFpI6-9Wzgkhkss?usp=sharing",
      },
    ],

    liveDemo: "https://uv-agent.vercel.app/",

    featured: true,
  },
  {
    id: 2,
    title: "My Notebooks",
    description:
      "A web application for organizing and showcasing the notebooks and machine learning projects developed throughout my university studies.",
    image: "/my-notebooks-page.png",

    tags: [
      "React",
      "Vite",
      "TypeScript",
    ],

    github: [
      {
        label: "Repository",
        url: "https://github.com/JulianRC1/My-Notebooks",
      },
    ],

    liveDemo: "https://my-notebooks-tau.vercel.app/",

    featured: true,
  },

  {
    id: 3,
    title: "T-Dev",
    description:
      "A platformer consisting of four levels and characters originally designed and created during development.",
    image: "/t-dev-page.png",

    tags: [
      "React Three Fiber",
      "Blender",
      "Firebase",
    ],

    github: [
      {
        label: "Repository",
        url: "https://github.com/T-Dev-Org/t-dev-game",
      },
    ],

    liveDemo: "https://t-dev-game.vercel.app/",

    featured: true,
  },
];