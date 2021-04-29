import React, { useState } from 'react'
import CodePegs from './CodePegs'
import EndTurn from './EndTurn'
import KeyPegs from './KeyPegs'

const PlayingTurn = ({ secretCode, updateTurnsHistory, changeTurn, turnNumber, endGame }) => {
  const [code, setCode] = useState(['x', 'x', 'x', 'x']) 

  const updateCode = (index, color) => {
    let newCode = [...code]
    newCode[index] = color
    setCode(newCode)
  }

  const areArraysEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
  }

  const endTurn = () => {
    console.log('code: ', code)
    console.log('secretCode: ', secretCode)
    console.log(areArraysEqual(code, secretCode))
    getCodemakerFeedback()
    if (areArraysEqual(code, secretCode)) {
      endGame(true)
    } else if (turnNumber === 11) {
      endGame(false)
    }
  }

  const getCodemakerFeedback = () => {
    let keyPegs = []
    let codeTemp = [...code]
    let secretCodeTemp = [...secretCode]

    for (let i = 0; i < 4; i++) {
      if (codeTemp[i] === secretCodeTemp[i]) {
        keyPegs.push('b')
        secretCodeTemp[i] = null
        codeTemp[i] = null
      }
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (codeTemp[i] && codeTemp[i] === secretCodeTemp[j]) {
          keyPegs.push('w')
          secretCodeTemp[j] = null
          break
        }
      }
    }
    updateTurnsHistory(code, keyPegs)
  }

  return (
    <div className="turn rack playing">
      <CodePegs 
        code={code} 
        updateCode={updateCode}
      />
      <EndTurn endTurn={endTurn}/>
      <KeyPegs keyPegs={null}/>
    </div>
  )
}

export default PlayingTurn
