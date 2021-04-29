import React from 'react'
import ReactDOM from 'react-dom'

const EndGameBox = ({ visible, toggle, startGame }) => {
  if (!visible) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='overlay'>
      <div className='modal end-game'>
        <h3>End Game</h3>
        <button onClick={startGame}>Start new game</button>
      </div>
    </div>, document.body
  )
}

export default EndGameBox
