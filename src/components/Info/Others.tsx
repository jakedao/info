type TOwnProps = {
  others: string[];
};

const Others = (props: TOwnProps) => {
  const { others } = props;
  return (
    <div>
      <h3>Others</h3>
      {others.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};
export default Others;
