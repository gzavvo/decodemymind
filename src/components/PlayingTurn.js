import React, { useState } from 'react'
import CodePegs from './CodePegs'
import EndTurn from './EndTurn'
import KeyPegs from './KeyPegs'

const PlayingTurn = ({ secretCode, updateTurnsHistory, changeTurn }) => {
  const [code, setCode] = useState(['x', 'x', 'x', 'x']) 

  const updateCode = (index, color) => {
    let newCode = [...code]
    //console.log('-- copy-code: ', newCode)
    newCode[index] = color
    //console.log('-- updatedCode', newCode)
    setCode(newCode)
  }

  const evaluateCode = () => {
    console.log("evaluating code")
    console.log("-- secret-code:", secretCode)
    console.log("-- code:", code)
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

    console.log('-- keyPegs after eval: ', keyPegs)
    updateTurnsHistory(code, keyPegs)
    console.log('history updated')
  }

  return (
    <div className="turn rack playing">
      <CodePegs 
        code={code} 
        updateCode={updateCode}
      />
      <EndTurn evaluateCode={evaluateCode}/>
      <KeyPegs keyPegs={null}/>
    </div>
  )
}

export default PlayingTurn
