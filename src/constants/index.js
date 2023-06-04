import {
  codepath,
  btt,
  unadat,
  dycd,
  eyescreamvision,
  stocktrace,
  tickstock,
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

const projects = [
  {
    name: "Stock Trace",
    description:
      "Web-based platform that allows users to search for stocks, track stocks by favoriting, and compare stock performances using the Tradier API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "text-red-500",
      },
      {
        name: "bootstrap",
        color: "text-pink-500",
      },
      {
        name: "tradier API",
        color: "green-text-gradient",
      },
    ],
    image: stocktrace,
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

export { experiences, projects };
