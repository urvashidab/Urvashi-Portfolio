import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiSelenium,
  SiJirasoftware,
  SiMysql,
} from "react-icons/si";

const skillsData = [
  {
    section: "Frontend",
    id: 1,
    skills: [
      { icon: FaHtml5, name: "HTML5", hoverColor: "hover:text-orange-600" },
      { icon: FaCss3Alt, name: "CSS3", hoverColor: "hover:text-blue-600" },
      {
        icon: SiJavascript,
        name: "JavaScript",
        hoverColor: "hover:text-yellow-400",
      },
      { icon: FaReact, name: "React.js", hoverColor: "hover:text-cyan-400" },
      {
        icon: FaBootstrap,
        name: "Bootstrap",
        hoverColor: "hover:text-purple-600",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
        hoverColor: "hover:text-sky-400",
      },
    ],
  },
  {
    section: "Backend",
    id: 2,
    skills: [
      { icon: FaNodeJs, name: "Node.js", hoverColor: "hover:text-green-600" },
      {
        icon: SiExpress,
        name: "Express.js",
        hoverColor: "hover:text-gray-700",
      },
      { icon: SiPostman, name: "Postman", hoverColor: "hover:text-orange-500" },
    ],
  },
  {
    section: "Tools & Others",
    id: 3,
    skills: [
      {
        icon: SiMongodb,
        name: "MongoDB",
        hoverColor: "hover:text-green-700",
      },
      {
        icon: SiMysql,
        name: "MySQL",
        hoverColor: "hover:text-blue-500",
      },
      {
        icon: FaDatabase,
        name: "SQL",
        hoverColor: "hover:text-gray-700",
      },
      {
        icon: FaGitAlt,
        name: "Git",
        hoverColor: "hover:text-orange-700",
      },
      {
        icon: FaGithub,
        name: "GitHub",
        hoverColor: "hover:text-black dark:hover:text-white",
      },
      {
        icon: SiSelenium,
        name: "Selenium",
        hoverColor: "hover:text-green-500",
      },
      {
        icon: SiJirasoftware,
        name: "Jira",
        hoverColor: "hover:text-blue-500",
      },
    ],
  },
];

export default skillsData;
