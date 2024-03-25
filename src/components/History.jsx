const History = (props) => {
  return (
    <div className="header_history">
      {props.history &&
        props.history?.map((item) => (
          <p key={item + "" + Math.random() * 44}>{item}</p>
        ))}
    </div>
  );
};

export default History;
