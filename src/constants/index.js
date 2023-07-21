import {
  codepath,
  btt,
  unadat,
  dycd,
  eyescreamvision,
  equitytrace,
  tickstock,
  css,
  html,
  git,
  javascript,
  react,
  tailwind,
  mui,
  firebase,
  python,
  ctp,
  basta,
  mongoDB,
  nodejs,
  php,
} from "../assets";

export const navLinks = [
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Google Software Engineering Program (G-SWEP) Participant",
    company_name: "BASTA",
    icon: basta,
    iconBg: "#FFFFFF",
    date: "July 2023 - Present",
    points: [
      "Selected to participate in 10 weeks of rigorous, technical mentoring sessions with a Google SWE and workshops designed to enhance technical problem-solving and interview skills",
    ],
  },
  {
    title: "Web Development Fellow",
    company_name: "CUNY Tech Prep",
    icon: ctp,
    iconBg: "#000",
    date: "July 2023 - Present",
    points: [
      "Selected to participate in a web development fellowship program that provides training in software development, professional development, and industry exposure to prepare for a career in tech",
    ],
  },
  {
    title: "Break Through Tech AI Fellow @Cornell Tech",
    company_name: "Break Through Tech",
    icon: btt,
    iconBg: "#999999",
    date: "June 2023 - Present",
    points: [
      "Conducted extensive data preprocessing, cleaning, and feature engineering to optimize the performance of machine learning algorithms with NumPy, pandas, and sckit-learn",
      "Utilized Python and scikit-learn to implement and train machine learning models with various algorithms, leveraging Jupyter Notebook for experimentation and visualization",
    ],
  },
  {
    title: "Fullstack Software Developer Intern",
    company_name: "Unadat",
    icon: unadat,
    iconBg: "#FFFFFF",
    date: "July 2023 - September 2023",
    points: [
      "Actively contributing to the development of a dynamic website, developing new features with PHP and connecting to a MySQL with AJAX and Javascript",
    ],
  },
  {
    title: "Cybersecurity Student",
    company_name: "CodePath",
    icon: codepath,
    iconBg: "#FFFFFF",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Learned about requests, cookies and session based attacks, sql injections and other types of attacks",
      "Received Certificate of Achievement for Codepath Cybersecurity with honors",
    ],
  },
  {
    title: "Information Technology Intern",
    company_name: "Department of Youth and Community Development",
    icon: dycd,
    iconBg: "#FFFFFF",
    date: "July 2022 - Sep 2022",
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
      "Created a clone Instagram app with Kotlin that stores and displays users posts, names, and images",
      "Collaborated with team members to developed Android applications that retrieves data through API calls and used Back4App to create a backend to store user information",
    ],
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: react,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongoDB,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const projects = [
  {
    name: "EquityTrace",
    description:
      "Web-based platform that allows users to search for stocks, trade and track stock performances, and view stock data using the Tradier API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "text-green-700",
      },
      {
        name: "NodeJS",
        color: "text-blue-500",
      },
      {
        name: "tradier API",
        color: "pink-text-gradient",
      },
    ],
    image: equitytrace,
    source_code_link: "https://github.com/XChen601/StockTrace",
  },
  {
    name: "Eye Scream Vision",
    description:
      "Web application created to promote an optometrist center catering to people looking for a full-service eye care experience while also providing a unique and fun experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "react-router",
        color: "pink-text-gradient",
      },
    ],
    image: eyescreamvision,
    source_code_link: "https://github.com/XChen601/Eye-Scream-Vision",
  },
  {
    name: "TickStock",
    description:
      "Android application built using Android Studio and Kotlin that displays stock prices, news relating to finance, and allows users to change settings",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: tickstock,
    source_code_link: "https://github.com/XChen601/TickStockFinal",
  },
];

export { technologies, experiences, projects };
