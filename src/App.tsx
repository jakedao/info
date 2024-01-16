import { Education, Experience, Heading, Section, Skills } from './components';
import './index.scss';

const App = () => {
  return (
    <div>
      <Heading />
      <Section section="Skills">
        <Skills />
      </Section>
      <Section section="Experiences">
        <Experience />
      </Section>
      <Section section="Education">
        <Education />
      </Section>
    </div>
  );
};
export default App;
