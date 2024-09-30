import React, { useContext } from "react";
import { AppContext } from "../App";

function Key(props) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);

  function selectLetter() {
    if (props.keyValue == "ENTER") {
      if (currentAttempt.letterPosition != 5) return;
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } 
    else if (props.keyValue == "DELETE") {
      if (currentAttempt.letterPosition == 0) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition - 1
      });
    } 
    else {
      if (currentAttempt.letterPosition > 4) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] =
        props.keyValue;
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
      });
    }
  }

  return (
    <div className="key" id={props.isBigKey && "big"} onClick={selectLetter}>
      {props.keyValue}
    </div>
  );
}

export default Key;
