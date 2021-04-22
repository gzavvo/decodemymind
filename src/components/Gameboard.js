import React, { useState } from 'react'
import Turns from './Turns'
import Code from './Code'

const Gameboard = () => {
  const code = ['G', 'Y', 'G', 'B']

  return (
    <div className="gameboard">
      <Turns />
      <Code code={code}/>
    </div>
  )
}

export default Gameboard
