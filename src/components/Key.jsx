import React, { useContext } from "react";
import { AppContext } from "../App";

function Key(props) {
  const {
    onSelectLetter,
    onEnter,
    onDeleteLetter,
  } = useContext(AppContext);

  function selectLetter() {
    if (props.keyValue == "ENTER") {
      onEnter();
    } else if (props.keyValue == "DELETE") {
      onDeleteLetter();
    } else {
      onSelectLetter(props.keyValue);
    }
  }
  return (
    <div className="key" id={props.isBigKey ? "big" : props.disabled && 'disabled'} onClick={selectLetter}>
      {props.keyValue}
    </div>
  );
}

export default Key;
