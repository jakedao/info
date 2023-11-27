import BaeminLogo from '../../assets/logo/baemin_icon.jpg';
import EpamLogo from '../../assets/logo/epam_icon.png';
import KMSLogo from '../../assets/logo/kms_icon.png';
import MorphotechLogo from '../../assets/logo/morphotech_icon.png';
import netcompanyLoho from '../../assets/logo/netcompany_icon.png';
import FreelancerLogo from '../../assets/logo/self_employment_icon.png';
import { IExperience, IUserInfo, TExpertises } from '../models';

const about: string[] = [
  "Front-end Developer expertise at Javascript(Types Script)",
  "Solid experience to the Software Development Life Cycle over 7 years experience",
  "Proficiency in web development with modern React Framework",
  "Having good sense of UI and UX and detail attention",
];

const info: IUserInfo = {
  name: "Dao Tuan Khanh",
  dob: "12 Jul 1991",
  education: "College",
  major: "Network Management",
  phone: "(+84) 938 842 596",
  email: "jakedao1991@mail.com",
  skype: "jake.dao1",
  linkedIn: "https://www.linkedin.com/in/khanh-dao-751a68128",
};

const expertises: TExpertises = {
  common: [
    "Having good understanding of Restful API and handling server side request",
    "Proficient understanding of code versioning tools GIT",
    "End-User mindset to provide proficient Interface Design",
  ],
  main: [
    "Having concrete JavaScript and TypeScript foundation with latest syntax ES6",
    "Having hands on latest React technology (React Hook, React Context...)",
    "Having knowledge about optimizing the performance of State Tree ",
    "Solid understanding of state management crossing the app Redux (Redux Toolkits)",
    "Eperiencing with styling UI by the most of used libraries: Bootstraps, Tailwinds...",
    "Having good practical experience on modern UI libraries (MUI, Ant Design, Chakra UI)",
    "Utilizing Webpack code-splitting to improved the Loading Time efficiently",
    "Structuring FE directory in scalable and easy maintenance way",
  ],
  others: [
    "Organizing goals for the mentee and abiding by deadlines to help them meet those goals",
    "Active-listener to building up the trustworthiness and respectful of mentee concern",
  ],
};

const experiences: IExperience[] = [
  {
    companyInfo: { name: "Baemin", logo: BaeminLogo },
    position: "Front End Developer",
    duration: "Jul 2022 - Dec 2023 · 1 yr 6 mos",
    domain: "System Management Tools and Analytics Boards",
    description:
      "Tools to manage campaigns, promotions, event and Store Manage ( Menu, Pricings and promotion)",
    skills: [
      {
        content: "FE tasks",
        sub: [
          "Typescript",
          "React Js",
          "State Management: redux and redux saga",
          "Styling systems: Material UI and styled-components",
        ],
      },
      { content: "BE tasks", sub: ["Typescript", "Express"] },
    ],
    responsibilities: [
      "Communicating with Marketing and PM for New features",
      "Work closely with Product Design teams and QA to create stunning UI and feature running smoothly.",
      "Improving user experiencing thanks to collaborating with Marketing team to earn the end user perspective",
      "Buiding middleware as a Proxy where FE connect connected to other services",
    ],
  },

  {
    companyInfo: { name: "Freelancing", logo: FreelancerLogo },
    position: "Front End Developer - Contractor",
    duration: "Aug 2021 - Oct 2022 · 1 yr 3 mosAug",
    domain: "Food ordering site on Universal Platform on TizenOS",
    description:
      "Providing quick menu access and payment for Subway Burger via TV screen running Tizen OS",
    skills: [
      {
        content: "FE tasks",
        sub: [
          "React JS",
          "State management via Redux & Local Storage",
          "Data visualization via chart (Rechart library)",
          "Styling: SCSS, Chakra UI, Tailwinds",
          "Publishing Web App on Tizen OS via Sigage OS",
          "Setup mono repo with lerna",
          "Communicate with Printer Device to print the templated text on Receipt ",
        ],
      },
      {
        content: "BE tasks",
        sub: [
          "Express",
          "MongoDB with Mongoose Library",
          "Handle token with jsonwebtoken and bcryptjs ( to protect password encrypted )",
        ],
      },
    ],
    responsibilities: [
      "Work closely with designer to transfer the Figma Design into browser",
      "Code review & refactor to adapt code sharing between Preview Page and Web View",
      "Setup WebApp to run on Signage OS to be available on various devices (Smart TV, Kiosk Store ...)",
      "Design API Authentication flow communicated with MongoDB",
      "Define Model Schema, API route and Middleware to handle Global Error",
    ],
  },

  {
    companyInfo: { name: "Morphotech Limited", logo: MorphotechLogo },
    position: "Front End Developer ",
    duration: "Sep 2020 -  Sep 2021 · 9 mos",
    skills: [
      "Javascript (Latest syntax ES6)",
      "ReactJS",
      "Redux, Redux saga",
      "Styling: SCSS, Ant design v3 and v4, Bootstrap",
    ],
    responsibilities: [
      "Clarify US with BA and Client",
      "Implement new features as US defined",
      "Attend Agile process ( Daily Standup, Sprint planning, Estimation, Sprint grooming..)",
      "Clean up backlog issue",
    ],
  },

  {
    companyInfo: { name: "Epam System", logo: EpamLogo },
    position: "Front End Developer and QA",
    duration: "May 2019 - Aug 2020 · 1 yr 4 mos",
    skills: [
      { content: "FE tasks", sub: ["Javascript", "React Js", "React Redux"] },
      {
        content: "QA tasks",
        sub: ["Katalon", "Java Appium", "Postman automation scripting"],
      },
    ],
    responsibilities: [
      "Clarify US with BA and Client",
      "Implement new features as US defined",
      "Attend Agile process ( Daily Standup, Sprint planning, Estimation, Sprint grooming..)",
      "Clean up backlog issue",
      "Build MVP with React App",
      "Support building simple UI for React App",
    ],
  },

  {
    companyInfo: { name: "netcompany", logo: netcompanyLoho },
    position: "Test Specialist",
    domain: "Blockchain - Smart Contract ",
    duration: "Oct 2018 - May 2019 · 8 mos",
    skills: ["Manual Testing", "Selenium - Specflow", "C#", "MySQL"],
    responsibilities: [
      "Maintaining and enhancing automation scripts",
      "Scripting test case for regression Test Suite",
      "Implementing essential helpers (API, SQL database, data table) in the Automation Framework ",
      "Brainstorm and design test cases for the new feature",
      "Bug Verification",
      "Actively communicate with oversea team for requirement clarification",
    ],
  },

  {
    companyInfo: { name: "KMS technology", logo: KMSLogo },
    position: "QA Engineer",
    domain: "Blockchain - Smart Contract ",
    duration: "Oct 2016 - Sep 2018 · 2 yrs",
    skills: [
      "MySQL",
      "Website testing",
      "Mobile testing",
      "Selenium Web driver",
      "Java",
    ],
    responsibilities: [
      "Maintaining and enhancing automation scripts",
      "Scripting test case for regression Test Suite",
      "Implementing essential helpers (API, SQL database, data table) in the Automation Framework ",
      "Brainstorm and design test cases for the new feature",
      "Bug Verification",
      "Actively communicate with oversea team for requirement clarification",
    ],
  },
];

export { about, info, expertises, experiences };
