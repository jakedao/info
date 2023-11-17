import '../styles/Heading.scss';

type TOwnProps = {
  name: string;
  subText: string;
};

const Heading = (props: TOwnProps) => {
  const { name, subText } = props;
  return (
    <div className="header-wrapper">
      <h1>{name}</h1>
      <em>{subText}</em>
    </div>
  );
};

export default Heading;
