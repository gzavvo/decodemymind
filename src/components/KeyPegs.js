const KeyPegs = ({ keyPegs }) => {
  if (keyPegs === null) {
    keyPegs = ["x", "x", "x", "x"]
  }

  return (
    <div className="key-pegs">
      {
        keyPegs.map((peg, index) => {
          return (
            <div key={index} className={peg}>
            </div>
          )
        })
      }
    </div>
  )
}

export default KeyPegs
