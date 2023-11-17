import { FaEnvelope, FaLinkedin, FaSkype } from "react-icons/fa6";

import "../styles/Info.scss";

type TUserInfo = {
  name: string;
  dob: string;
  education: string;
  major: string;
  email: string;
  skype: string;
  linkedIn: string;
};

type TOwnProps = {
  profileImg: string;
  info: TUserInfo;
  ranking?: any;
  otherInfo?: React.ReactNode;
};

const Info = (props: TOwnProps) => {
  const { profileImg, info } = props;

  const ICON_ONLY = ["email", "skype", "linkedIn"];

  const renderMainInfo = () => {
    return (
      <div className="info-main">
        {Object.keys(info).map((item) => {
          return (
            <div className="info-items">
              {!ICON_ONLY.includes(item) && (
                <div>
                  <b>
                    <i>
                      {item[0].toLocaleUpperCase() +
                        item.slice(1, item.length) +
                        ": "}
                    </i>
                  </b>
                  {info[item as keyof TUserInfo]}
                </div>
              )}
            </div>
          );
        })}
        <div className="info-icons">
          <a href={"mailto:" + info.email} target="_blank">
            <FaEnvelope />
          </a>
          <a href={`skype:-skype-name-${info.skype}chat`}>
            <FaSkype />
          </a>
          <a href={info.linkedIn} target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="info">
      <div className="image-wrapper">
        <img src={profileImg} alt="profile_image" />
      </div>
      <h3>CONTACTS</h3>
      {renderMainInfo()}
    </div>
  );
};
export default Info;
