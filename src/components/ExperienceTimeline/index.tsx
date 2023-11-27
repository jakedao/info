import { IExperience } from "../../models";
import "../../styles/Experiences.scss";
import Section from "../Section";

import Experience from "./Experience";

type TOwnProps = {
  experiences: IExperience[];
};

const ExperienceTimeline = (props: TOwnProps) => {
  const { experiences } = props;

  return (
    <Section section="Job Experiences">
      {experiences.map((exp) => (
        <Experience key={exp.companyInfo.name} {...exp} />
      ))}
    </Section>
  );
};

export default ExperienceTimeline;
