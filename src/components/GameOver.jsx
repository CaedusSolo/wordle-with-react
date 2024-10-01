import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
  const {gameOver, setGameOver, correctWord, currentAttempt} = useContext(AppContext)
  return (
    <div className="gameOver">
        <h1>{gameOver.guessedWord ? "You correctly guessed" : "You failed :("}</h1>
        <h3>Correct Word: {correctWord}</h3>
    </div>
  )
}

export default GameOver