const CodePegs = ({ code }) => {
  return (
    <div className="code-pegs">
      {code.map(pegColor => {
        return (
          <div className={`peg ${pegColor}`}>
          </div>
        )
        })
      }
    </div>
  )
}

export default CodePegs
