import { TExperience } from '../model';

export const experiences: TExperience[] = [
  {
    position: "Javascript Developer",
    companyName: "Baemin",
    start: "Jan 2022",
    end: "Nov 2023",
    stacks: ["Typescript", "ReactJs", "Redux", "Redux Saga", "NestJS"],
    do: [
      "Implemented a Web Portal where the restaurant owner can configure Mobile App Home as their intention.",
      "Provided friendly UI to improve significantly user engagement within Home sections.",
      "Gathered APIs request via NestJs middleware to centralize the API from microservice and transforming data",
      "Replaced the old existing State Management by custom hook that reduce upto 30% time spent on new feature",
      "Ensured the deployed code with Code Coverage above 80%",
      "Applied code-splitting on Reducer when loading different routes to reduce bundle size",
    ],
  },
  {
    position: "Javascript Developer",
    companyName: "Freelancer",
    start: "Aug 2021",
    end: "Jan 2022",
    stacks: [
      "ReactJs",
      "Typescript",
      "Express",
      "Mongoose",
      "Signage OS",
      "Tizen OS",
      "Receipt Printer Device",
    ],
    do: [
      "Implemented the WebApp to allow user can modify how the Web View on Tizen TV look likes",
      "Configured WebApp to run on Signage OS to be available on various devices (Smart TV, Kiosk Store ...)",
      "Shared the code between Web View and Tizen WebView under Lerna Controller",
      "Handled generated user token  with jsonwebtoken and bcryptjs (to protect password encrypted )",
      "Designed API authentication flow communicated with MongoDB",
      "Applied Global Error handling to reserve the uncaught errors",
    ],
  },
  {
    position: "Frontend Developer",
    companyName: "Morphotech Limited",
    start: "Sep 2020",
    end: "Aug 2021",
    stacks: ["ReactJS", "Javascript", "Ant Design", "Redux"],
    do: [
      "Implemented Websocket to listen the notifications to warn and validate user action synchronously",
      "Rendered the in-out transaction chart with Rechart Library",
      "Replaced the old of Form Handler by React Hook Form to provide the cleaner code and coding efficiency",
    ],
  },
  {
    position: "Frontend Developer Intern",
    companyName: "Epam",
    start: "Oc 2019",
    end: "Aug 2020",
    stacks: ["Javascript", "ReactJs", "React Native"],
    do: [
      "Implemented the moview web with TMDb API",
      "Rendered simple WebView on React Native App",
      "Built PWA - Coke Machine to provide unqueue Coke Buyer during Tokyo Olympic",
    ],
  },
  {
    position: "Test sepcialist",
    companyName: "netcompany",
    start: "Oct 2018",
    end: "Sep 2019",
    stacks: [
      "Testing",
      "Automation Testing",
      "MS SQL",
      "Java",
      "Cucumber",
      "Web Driver",
    ],
    do: [
      "Delivered the Test Strategy which aligns with Client Release Plan.",
      "Setup the Automation framework from Scratch with Java and Selenium Cucumber",
      "Scripted test case for Regression Test Suite to cover revisted bugs and ensure key feature",
      "Implemented essential helpers and hooks in Cucumber Automation Framework to avoid repeated code",
    ],
  },
  {
    position: "QA Engineer",
    companyName: "KMS technology, Inc",
    start: "Oct 2016",
    end: "Sep 2018",
    stacks: ["Testing", "Automation Test", "Mobile Testing", "C#", "Specflow"],
    do: [
      "Provided the test strategy for Regression Test Plan for every new features introducing",
      "Implemeted the API Test Suite with postman that helps the early bug awareness",
      "Captured and analyzied event from Mobile App  by the Fiddler Middleware to ensure User Behavior Tracking",
    ],
  },
];

export const education = [
  {
    degree: "Associate's degree - System Network Management",
    issuedBy: "iSpace College",
    start: "2011",
    end: "2013",
  },
  {
    degree: "IELTS Academic Band 6.0",
    issuedBy: "British Council",
    start: "2022",
    end: "2024",
  },
];
