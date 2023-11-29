import '../styles/Abouts.scss';

import Section from './Section';

type TOwnProps = {
  about: string[];
};

const About = (props: TOwnProps) => {
  const { about } = props;

  return (
    <Section section="About">
      {about.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </Section>
  );
};
export default About;
