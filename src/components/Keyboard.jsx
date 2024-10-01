import React, { useEffect, useCallback, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const { onSelectLetter, onEnter, onDeleteLetter, disabledLetters } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDeleteLetter();
    } else {
      const allKeys = [...keys1, ...keys2, ...keys3];
      if (allKeys.includes(event.key.toUpperCase())) {
        onSelectLetter(event.key.toUpperCase());
      }
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}  />;
        })}
      </div>

      <div className="line2">
        {keys2.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>

      <div className="line3">
        <Key keyValue="ENTER" isBigKey={true} />
        {keys3.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}/>;
        })}
        <Key keyValue="DELETE" isBigKey={true} />
      </div>
    </div>
  );
}

export default Keyboard;