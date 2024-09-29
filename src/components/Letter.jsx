import React, {useContext} from 'react'
import { AppContext } from '../App'

function Letter(props) {
  const { board } = useContext(AppContext)
  const letter = board[props.attemptValue][props.letterPosition]
  
  return (
    <h3>A</h3>
  )
}

export default Letter