import Section from './Section';

type TOwnProps = {
  about: string[];
};

const About = (props: TOwnProps) => {
  const { about } = props;

  return (
    <Section section="About">
      {about.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Section>
  );
};
export default About;
