import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";


function Letter(props) {
  const { board, correctWord, currentAttempt, disabledLetters, setDisabledLetters } = useContext(AppContext);
  const letter = board[props.attemptValue][props.letterPosition];
  const correct = correctWord.toUpperCase()[props.letterPosition] === letter;
  const almost = !correct && letter && correctWord.toUpperCase().includes(letter);
  const letterState =
    currentAttempt.attempt > props.attemptValue && (correct
      ? "correct"
      : almost
      ? "almost"
      : "error")

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters(prevState => [...prevState, letter])
    }
  },[currentAttempt.attempt])

  return <div id={letterState}>{letter}</div>;
}

export default Letter;