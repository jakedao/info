import { experiences } from '../../data';

import './Experiences.scss';

const Expriences = () => {
  return (
    <div className="experience">
      {experiences.map((item, index) => (
        <div className="experience__item" key={index}>
          <div className="experience__heading">
            <div>
              <b>
                <i>{item.position}</i>
              </b>
            </div>
            <b className="company_name">{item.companyName}</b>
            <div className="duration">{`${item.start} - ${item.end}`}</div>
          </div>

          <div className="stack">
            <b>Stack used</b>: {item.stacks.join(", ")}
          </div>
          <div>
            {item.do.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Expriences;
