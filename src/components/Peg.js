import ColorPicker from './ColorPicker'
import useModal from '../useModal'

const Peg = ({ pegIndex, color, updateCode }) => {
  const {toggle, visible} = useModal()

  const changePegColor = (newColor) => {
    updateCode(pegIndex, newColor)
  }

  return (
    <div className={`peg ${color}`}  onClick={toggle}> 
      <ColorPicker 
        visible={visible} 
        toggle={toggle}
        changePegColor={changePegColor}
      />
    </div>
  )
}

export default Peg
