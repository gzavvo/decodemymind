import React from 'react'
import ReactDOM from 'react-dom'

const EndGameBox = ({ visible, toggle, startGame, endGameMessage }) => {
  if (!visible) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='overlay'>
      <div className='modal end-game'>
        <h3>{endGameMessage}</h3>
        <button className='button primary' onClick={startGame}>Start new game</button>
      </div>
    </div>, document.body
  )
}

export default EndGameBox
