import { useState, createContext } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Navbar from "./components/Navbar";
import { defaultBoard } from "./WordsList";

  // context API
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  return (
    <>
      <Navbar />
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </>
  );
}

export default App;
