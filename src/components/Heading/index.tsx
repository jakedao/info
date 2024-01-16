import './Heading.scss';

const Heading = () => {
  const contacts: Record<string, string> = {
    email: "jakedao1991@gmail.com",
    location: "Ho Chi Minh city , Vietnam",
    phone: "(+84) 938 842 596",
    linkedIn: "https://www.linkedin.com/in/khanh-dao-751a68128/",
    git: "https://github.com/jakedao",
  };

  return (
    <div className="heading">
      <h2>Khanh Dao / Jake Dao</h2>
      <div className="heading__contacts">
        {Object.keys(contacts).map((key: string) => {
          if (["email", "git", "linkedIn"].includes(key)) {
            return (
              <div>
                <a
                  href={key === "email" ? "mailto:" : "" + contacts[key]}
                  target="_blank"
                >
                  {contacts[key]}
                </a>
              </div>
            );
          }
          return <div>{contacts[key]}</div>;
        })}
      </div>
    </div>
  );
};

export default Heading;
