import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "NxtMeet",
    href: "/projects",
    tags: ["Reactjs", "Realtime Chat", "WebRTC", "Render"],
    image: {
      LIGHT: "/images/projects/NxtMeet-1.png",
      DARK: "/images/projects/NxtMeet-1.png",
    },
  },
  {
    index: 1,
    title: "Basket-Hunt",
    href: "/projects",
    tags: [
      "Flask",
      "MYSql",
      "NLP",
      "Numpy",
      "Render",
    ],
    image: {
      LIGHT: "/images/projects/JobHunt-1.png",
      DARK: "/images/projects/JobHunt-1.png",
    },
  },
  {
    index: 2,
    title: "AI-Asstistant",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Render"],
    image: {
      LIGHT: "/images/projects/AI-Assistant-1.png",
      DARK: "/images/projects/AI-Assistant-1.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "NxtMeet",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/NxtMeet-1.png",
      "/images/projects/NxtMeet-2.png",
      "/images/projects/NxtMeet-3.png",
      "/images/projects/NxtMeet-4.png",
      "/images/projects/NxtMeet-5.png",
      "/images/projects/NxtMeet-6.png",
    ],
    description:
      "NxtMeet is a web-based video and chat platform that enables seamless real-time communication with high-quality video calls and instant messaging using modern web technologies.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://nxt-meetfrontend.onrender.com",
  },
  {
    name: "Job-Hunt",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/JobHunt-1.png",
      "/images/projects/JobHunt-2.png",
      "/images/projects/JobHunt-3.png",
      "/images/projects/JobHunt-4.png",
      "/images/projects/JobHunt-5.png",
      "/images/projects/JobHunt-6.png",
    ],
    description:
      "**Job-Hunt** is a web-based job portal that connects job seekers and employers by providing an easy platform to search, post, and apply for jobs efficiently.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "AI-Asstistant",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/AI-Assistant-1.png",
      "/images/projects/AI-Assistant-2.png",
      "/images/projects/AI-Assistant-3.png",
      
    ],
    description:
      "**Virtual Assistant** is an AI-powered web application that supports voice commands, user customization, and real-time interactions using the MERN stack with Gemini API integration.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  
];
