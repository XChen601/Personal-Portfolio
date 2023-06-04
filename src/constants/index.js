import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  codepath,
  btt,
  unadat,
  dycd,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Break Through Tech AI Fellow @Cornell Tech",
    company_name: "Break Through Tech",
    icon: btt,
    iconBg: "#999999",
    date: "June 2023 - Present",
    points: [
      "Gaining hands-on experience in machine learning and AI algorithms, methodologies, and frameworks",
    ],
  },
  {
    title: "Incoming Software Developer Intern",
    company_name: "Unadat",
    icon: unadat,
    iconBg: "#FFFFFF",
    date: "July 2023 - September 2023",
    points: ["Incoming intern at Unadat"],
  },
  {
    title: "Information Technology Intern",
    company_name: "Department of Youth and Community Development",
    icon: dycd,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Completed and deployed a SQL Server Reporting Services (SSRS) report data to accelerate retrieval of relevant data for the agency",
      "Used SQL Server Management Studio to retrieve data across multiple years from an internal database to incorporate into an SSRS report",
      "Organized data using excel spreadsheets to update internal databases with improved descriptions for over 100 reports for better readability and understand-ability",
      "Participated in daily stand-ups and collaborated with team members to achieve sprint goals",
    ],
  },
  {
    title: "Android Developer",
    company_name: "CodePath",
    icon: codepath,
    iconBg: "#FFFFFF",
    date: "Feb 2022 - April 2022",
    points: [
      "Learned the basics of Android Studio, Kotlin, working with APIs, and the backend",
      "Created a clone Instagram app that stores and displays users posts, names, and images",
      "Worked with team members to developed basic Android applications that retrieves data through API calls and used Back4App to create a backend to store user information",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, projects };
