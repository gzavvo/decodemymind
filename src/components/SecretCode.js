const SecretCode = ({ secretCode }) => {
  return (
    <div className="secret-code">
      <div className="rack">
        <div className="code-pegs">
          {secretCode.map((pegColor, index) => {
            return (
              <div key={index} className={`peg ${pegColor}`}>
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

export default SecretCode
