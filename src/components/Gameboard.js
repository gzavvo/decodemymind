import React, { useState } from 'react'
import Turns from './Turns'
import SecretCode from './SecretCode'

const Gameboard = () => {
  const pegs = ['R', 'G', 'B', 'Y']
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [secretCode, setSecretCode] = useState(null)
  const [turnsHistory, setTurnsHistory] = useState(null)
  const [turnNumber, setTurnNumber] = useState(null)

  const generateSecretCode = () => {
    const code = []
    for (let i = 0; i < 4; i++) {
      code.push(pegs[Math.floor(Math.random() * pegs.length)])
    }
    return code
  }

  const gerenerateEmptyTurnsHistory = () => {
    const array = []
    const emptyTurn = {
      codePegs: null,
      keyPegs: null,
      isPlaying: false
    }
    for (let i = 0; i < 12; i++) {
      array.push({...emptyTurn})
    }
    array[0].isPlaying = true
    return array
  }

  const updateTurnsHistory = (newCodePegs, newKeyPegs) => {
    const newTurnsHistory = [...turnsHistory]
    console.log('update new turns history')
    newTurnsHistory[turnNumber].codePegs = newCodePegs
    newTurnsHistory[turnNumber].keyPegs = newKeyPegs
    newTurnsHistory[turnNumber].isPlaying = false
    newTurnsHistory[turnNumber + 1].isPlaying = true
    console.log(newTurnsHistory)
    setTurnsHistory(newTurnsHistory)
    setTurnNumber(turnNumber + 1)
    console.log(turnsHistory)
  }

  const startGame = () => {
    setIsGameStarted(true)
    setTurnsHistory(gerenerateEmptyTurnsHistory())
    setSecretCode(generateSecretCode())
    setTurnNumber(0)
  }

  if (!isGameStarted) {
    return (
      <button className="button primary" onClick={startGame}>Start Game</button>
    )
  }


  return (
    <div className="gameboard">
      <Turns 
        turnsHistory={turnsHistory}
        secretCode={secretCode}
        updateTurnsHistory={updateTurnsHistory}
      />
      <SecretCode secretCode={secretCode}/>
    </div>
  )
}

export default Gameboard
