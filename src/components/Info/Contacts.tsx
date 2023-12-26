import { FaEnvelope, FaGit, FaLinkedin, FaPhone, FaSkype } from 'react-icons/fa6';

import { IUserInfo } from '../../models';

const Contacts = (info: IUserInfo) => {
  return (
    <div className="info-main">
      <div className="info-items">
        <FaEnvelope />
        {info.email}
      </div>

      <div className="info-items">
        <FaPhone />
        {info.phone}
      </div>

      <div className="info-items">
        <FaSkype />
        {info.skype}
      </div>

      <div className="info-items">
        <FaLinkedin />
        {info.linkedIn}
      </div>

      <div className="info-items">
        <FaGit />
        {info.git}
      </div>
    </div>
  );
};

export default Contacts;
