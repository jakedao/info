import { IUserInfo } from '../../models';
import '../../styles/Info.scss';

import Contacts from './Contacts';
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

  const mainSkills = [
    { id: "js", name: "Javascript", rating: 4 },
    { id: "style", name: "HTML / CSS", rating: 4 },
  ];
  const subSkills = [
    { id: "qa", name: "QA Manual", rating: 4 },
    { id: "qaa", name: "QA Automation", rating: 3 },
    { id: "java", name: "Java", rating: 2 },
  ];

  const frameworkSkilss = [
    { id: "react", name: "React", rating: 4 },
    { id: "node", name: "Express", rating: 2 },
    { id: "qa", name: "Selenium", rating: 3 },
  ];

  const otherInfo = [
    "Native: Vietnamese",
    "English: Band 6.0 Academic IELTS",
    "Rating as B2 at Epam Inc",
  ];

  return (
    <div className="info">
      <div className="image-wrapper">
        <img src={profileImg} alt="profile_image" />
      </div>
      <Contacts {...info} />
      <Expertise
        skills={{ main: mainSkills, sub: subSkills, fw: frameworkSkilss }}
      />
      <Others others={otherInfo} />
    </div>
  );
};
export default Info;
