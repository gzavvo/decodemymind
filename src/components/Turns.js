import PlayedTurn from './PlayedTurn'
import PlayingTurn from './PlayingTurn'
import EmptyTurn from './EmptyTurn'

const Turns = ({ turnsHistory, secretCode, updateTurnsHistory }) => {

  return (
    <div className="turns">
      { 
        turnsHistory.map(turn => {
          if (turn.isPlaying) {
            return (
              <PlayingTurn 
                key={Math.floor(Math.random() * 1000000)} 
                secretCode={secretCode}
                updateTurnsHistory={updateTurnsHistory}
              />
            )
          } else if (!turn.codePegs) {
            return (
              <EmptyTurn 
                key={Math.floor(Math.random() * 1000000)} 
              />
            )
          } else {
            return (
              <PlayedTurn 
                key={Math.floor(Math.random() * 1000000)} 
                codePegs={turn.codePegs} 
                keyPegs={turn.keyPegs}
              />
            )
        }
      })}
    </div>
  )
}

export default Turns
