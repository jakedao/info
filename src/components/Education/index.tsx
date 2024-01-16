import { education } from '../../data';

import './Education.scss';

const Education = () => {
  return (
    <div className="education">
      {education.map((item, index) => (
        <div className="education__item" key={index}>
          <div>{item.degree}</div>
          <div>{item.issuedBy}</div>
          <div>{`${item.start} - ${item.end}`}</div>
        </div>
      ))}
    </div>
  );
};
export default Education;
