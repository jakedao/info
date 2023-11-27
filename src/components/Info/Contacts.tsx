import { FaEnvelope, FaLinkedin, FaSkype } from 'react-icons/fa6';

import { IUserInfo } from '../../models';

const Contacts = (info: IUserInfo) => {
  const ICON_ONLY = ["email", "skype", "linkedIn"];

  return (
    <div className="info-main">
      <h3>CONTACT</h3>
      {Object.keys(info).map((item) => {
        return (
          <div className="info-items" key={item}>
            {!ICON_ONLY.includes(item) && (
              <div>
                <b>
                  <i>
                    {item[0].toLocaleUpperCase() +
                      item.slice(1, item.length) +
                      ": "}
                  </i>
                </b>
                {info[item as keyof IUserInfo]}
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

export default Contacts;
