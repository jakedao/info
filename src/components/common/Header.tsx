import { useNavigate } from "react-router-dom";

import { TMenuItem } from "../../models/common";
import "../../styles/Header.scss";

type TOwnProps = {};
const Header = (props: TOwnProps) => {
  const {} = props;
  const navigate = useNavigate();

  const menuItem: TMenuItem[] = [
    { url: "/cv", text: "CV" },
    { url: "/me", text: "About" },
  ];

  const onNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <div className="header">
      <div className="menu">
        {menuItem.map((item) => (
          <span className="menu__item" onClick={() => onNavigate(item.url)}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Header;
