import { TExpertises } from '../models';

import Section from './Section';

type TOwnProps = {
  expertises: TExpertises;
};

const Skills = (props: TOwnProps) => {
  const { expertises } = props;
  const { common, main, others } = expertises;

  return (
    <Section section="Highlights">
      <h3>Common</h3>
      {common.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}

      <h3>Professional Skills</h3>
      {main.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}

      {others && (
        <>
          <h3>Others</h3>
          {others.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </>
      )}
    </Section>
  );
};

export default Skills;
