import avt from "../assets/images/avt.jpeg";

import { Heading, Info, Section } from "./components";

const App = () => {
  const info = {
    name: "Dao Tuan Khanh",
    dob: "12 Jul 1991",
    education: "College",
    major: "Network",
    email: "jakedao1991@mail.com",
    skype: "jake.dao1",
    linkedIn: "https://www.linkedin.com/in/khanh-dao-751a68128",
  };

  return (
    <div>
      <Heading name="Khanh Dao" subText="Javascript Developer" />
      <Info profileImg={avt} info={info} />
      <Section section="About" />
      <h1>KD</h1>
      <div>KD</div>
      <div> TESt</div>
    </div>
  );
};
export default App;
