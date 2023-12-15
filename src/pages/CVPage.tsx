import avt from '../../assets/images/avt.jpeg';
import { About, ExperienceTimeline, Heading, Info, Skills } from '../components';
import * as data from '../data';

type TOwnProps = {};
const CVPage = (props: TOwnProps) => {
  const {} = props;
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
export default CVPage;
