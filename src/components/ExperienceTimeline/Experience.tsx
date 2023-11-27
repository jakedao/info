import { IExperience, TSkill } from '../../models';

const Experience = (props: IExperience) => {
  const {
    companyInfo,
    position,
    duration,
    skills,
    responsibilities,
    domain,
    description,
  } = props;
  const { name, logo } = companyInfo;

  const renderSkills = (skills: TSkill[]) => {
    return skills.map((item, idx) => {
      if (typeof item !== "string") {
        return (
          <div key={idx} className="skillset__adv">
            <h5>{item.content}</h5>
            {item.sub.map((child, index) => (
              <li key={index}>{child}</li>
            ))}
          </div>
        );
      }
      return <li key={idx}>{item}</li>;
    });
  };

  return (
    <div className="experience-section">
      <div className="experience-section__heading">
        <div className="experience-section__company-logo">
          <img src={logo} alt={`logo_${name}`} />
        </div>
        <div className="experience-section__company-name">
          <h4>{`${position} at ${name}`}</h4>
          <em>{duration}</em>
        </div>
      </div>

      <div>
        {domain && (
          <div className="experience-section__section">
            <b>Domain: </b>
            {domain}
          </div>
        )}
        {description && (
          <div className="experience-section__section">
            <b>Description: </b>
            {description}
          </div>
        )}
        <div className="skillset">
          <h4>Skillsets</h4>
          {renderSkills(skills)}
        </div>
        <div>
          <h4>Responsibilities</h4>
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
