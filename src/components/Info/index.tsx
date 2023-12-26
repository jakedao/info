import { skills } from '../../data';
import { IUserInfo } from '../../models';
import '../../styles/Info.scss';

import Contacts from './Contacts';
import Education from './Education';
import Expertise from './Expertise';
import Others from './Others';

type TOwnProps = {
  profileImg: string;
  info: IUserInfo;
  ranking?: any;
  otherInfo?: React.ReactNode;
};

const Info = (props: TOwnProps) => {
  const { profileImg, info } = props;

  return (
    <div className="info">
      <div className="image-wrapper">
        <img src={profileImg} alt="profile_image" />
      </div>
      <Contacts {...info} />
      <Expertise
        skills={{ main: skills.main, sub: skills.sub, fw: skills.fw }}
      />
      <Others others={skills.other} />

      <Education />
    </div>
  );
};
export default Info;
