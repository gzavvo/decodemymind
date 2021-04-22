import CodePegs from './CodePegs'
import EndTurn from './EndTurn'
import KeyPegs from './KeyPegs'

const Turn = ({ code }) => {

  if (code === null) {
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
      <CodePegs code={code}/>
      <EndTurn />
      <KeyPegs />
    </div>
  )
}

export default Turn
