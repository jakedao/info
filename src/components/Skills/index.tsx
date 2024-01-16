import './Skills.scss';

type TSkills = {
  main: string[];
  libs: string[];
  others: string[];
};

const Skills = () => {
  const skills: TSkills = {
    main: [
      "Typescript",
      "Javascript",
      "React",
      "Express",
      "Node",
      "Html / CSS",
      "jQuery",
      "Git",
    ],
    libs: ["Material UI", "Antd", "Redux", "Mongoose", "Jest"],
    others: ["Testing", "Selenium", "WebDriver", "English", "Vietnamese"],
  };

  return (
    <div>
      {Object.keys(skills).map((item) => (
        <li>{skills[item as keyof TSkills].join(" - ")}</li>
      ))}
    </div>
  );
};

export default Skills;
