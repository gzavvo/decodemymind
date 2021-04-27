import CodePegs from './CodePegs'
import KeyPegs from './KeyPegs'

const PlayedTurn = ({ codePegs, keyPegs }) => {
  return (
    <div className="turn rack">
      <CodePegs code={codePegs}/>
      <div></div>
      <KeyPegs keyPegs={keyPegs}/>
    </div>
  )
}

export default PlayedTurn
