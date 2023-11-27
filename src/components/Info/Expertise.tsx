import { FaRegStar, FaStar } from "react-icons/fa";

type TSkill = { id: string; name: string; rating: number };

type TOwnProps = {
  skills: {
    main: TSkill[];
    sub: TSkill[];
    fw: TSkill[];
  };
};

const Expertise = (props: TOwnProps) => {
  const { skills } = props;
  const { main, sub, fw } = skills;

  const renderSkillset = (skills: TSkill[]) => {
    return skills.map((skill) => {
      let stars = Array(5).fill(<FaRegStar />);
      stars = stars.fill(<FaStar size={18} />, 0, skill.rating);

      return (
        <div key={skill.id} className="skill__item">
          <div>{skill.name}</div>

          {stars.map((item) => item)}
        </div>
      );
    });
  };

  return (
    <div className="skill">
      <h3>EXPERTISE</h3>
      <div className="skill__section">
        <div className="skill__title">Main Skills</div>
        {renderSkillset(main)}
      </div>
      <div className="skill__section">
        <div className="skill__title">Framework Skills</div>
        {renderSkillset(fw)}
      </div>
      <div className="skill__section">
        <div className="skill__title">Other Skills</div>
        {renderSkillset(sub)}
      </div>
    </div>
  );
};
export default Expertise;
