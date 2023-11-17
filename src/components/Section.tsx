import '../styles/Section.scss';

type TOwnProps = {
  section: string;
  children?: React.ReactNode;
};

const Section = (props: TOwnProps) => {
  const { section, children } = props;
  return (
    <div className="section">
      <div>{section.toUpperCase()}</div>
      {children}
    </div>
  );
};
export default Section;
