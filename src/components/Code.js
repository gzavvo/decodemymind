const Code = ({ code }) => {
  return (
    <div className="secret-code">
      <div className="rack">
        <div className="code-pegs">
          {code.map(pegColor => {
            return (
              <div className={`peg ${pegColor}`}>
              </div>
            )
            })
          }
        </div>
        <div className="empty-unit">
        </div>
        <div className="empty-unit">
        </div>
      </div>
    </div>
  )
}

export default Code
