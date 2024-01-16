import './Section.scss';

type TOwnProps = {
  section: string;
  children?: React.ReactNode;
};

const Section = (props: TOwnProps) => {
  const { section, children } = props;
  return (
    <div>
      <div className="section">
        <div className="section__header">
          <span>{section}</span>
          <div className="section__header__spacing"></div>
        </div>
      </div>
      <div className="section__content">{children}</div>
    </div>
  );
};

export default Section;
