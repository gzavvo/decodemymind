import Peg from './Peg'

const CodePegs = ({ code, updateCode }) => {
  return (
    <div className="code-pegs">
      {code.map((pegColor, index) => {
        return (
          <Peg 
            key={index} 
            pegIndex={index}
            color={pegColor} 
            updateCode={updateCode}
          />
        )
        })
      }
    </div>
  )
}

export default CodePegs
