import React from 'react'
import ReactDOM from 'react-dom'

const ColorPicker = ({ visible, toggle, changePegColor }) => {
  const confirmColor = (event) => {
    changePegColor(event.target.getAttribute('pegcolor'))
    toggle()
  }

  const position = {
    left: window.event.target.getBoundingClientRect().left - 92,
    top: window.event.target.getBoundingClientRect().top + 40
  }

  if (!visible) {
    return null
  }

  return ReactDOM.createPortal(
    <div style={position} className='modal code-pegs'>
      <div className='peg R' pegcolor='R' onClick={confirmColor}></div>
      <div className='peg G' pegcolor='G' onClick={confirmColor}></div>
      <div className='peg B' pegcolor='B' onClick={confirmColor}></div>
      <div className='peg Y' pegcolor='Y' onClick={confirmColor}></div>
    </div>, document.body
  )
} 

export default ColorPicker
