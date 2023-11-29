import avt from '../assets/images/avt.jpeg';

import { About, ExperienceTimeline, Heading, Info, Skills } from './components';
import * as data from './data';

const App = () => {
  return (
    <div>
      <Heading name="Khanh Dao" subText="Javascript Developer" />
      <Info profileImg={avt} info={data.info} />
      <div className="content">
        <About about={data.abouts} />
        <Skills expertises={data.expertises} />
        <ExperienceTimeline experiences={data.experiences} />
      </div>
    </div>
  );
};
export default App;
