import CodePegs from './CodePegs'
import EndTurn from './EndTurn'
import KeyPegs from './KeyPegs'

const PlayedTurn = ({ codePegs, keyPegs }) => {

  if (codePegs === null) {
    return (
      <div className="rack empty">
        <CodePegs code={['x','x','x','x']} />
        <div className="empty-unit"></div>
        <div className="empty-unit"></div>
      </div>
    )
  }
  return (
    <div className="turn rack">
      <CodePegs code={codePegs}/>
      <EndTurn />
      <KeyPegs keyPegs={null}/>
    </div>
  )
}

export default PlayedTurn
