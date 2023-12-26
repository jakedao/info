type TOwnProps = {
  others: string[];
};

const Others = (props: TOwnProps) => {
  const { others } = props;
  return (
    <div>
      <h3>Languages</h3>
      {others.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};
export default Others;
