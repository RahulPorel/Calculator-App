import History from "./History";
import "./styles-components/Header.css";
import { useRef, useEffect } from "react";

const Header = (props) => {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);
  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  console.log(props.toggleHistory);

  return (
    <div className="header custom-scroll">
      {!props.toggleHistory ? <History history={props.history} /> : null}

      <br />
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">
        {props.result}
      </p>
    </div>
  );
};

export default Header;
