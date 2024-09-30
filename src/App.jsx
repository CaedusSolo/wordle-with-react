import { useState, createContext } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Navbar from "./components/Navbar";
import { defaultBoard } from "./WordsList";

  // context API
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})

  return (
    <>
      <Navbar />
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </>
  );
}

export default App;
