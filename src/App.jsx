import { useState, createContext, useEffect } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Navbar from "./components/Navbar";
import GameOver from "./components/GameOver";
import { defaultBoard } from "./WordsList";
import { generateWordSet } from "./WordsList";

// context API
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([])
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false
  })
  const [correctWord, setCorrectWord] = useState("")

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord)
    });
  }, []);

  function onSelectLetter(keyValue) {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  }

  function onDeleteLetter() {
    if (currentAttempt.letterPosition == 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  }

  function onEnter() {
    if (currentAttempt.letterPosition != 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }
    
    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Word Not Found");
    }

    if (currentWord === correctWord) {
      setGameOver({gameOver: true, guessedWord: true})
      return
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({gameOver: true, guessedWord: false})
    }

  }

  return (
    <>
      <Navbar />
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onEnter,
          onDeleteLetter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver, 
          setGameOver
        }}
      >
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        
      </AppContext.Provider>
    </>
  );
}

export default App;
