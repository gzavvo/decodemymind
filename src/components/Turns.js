import Turn from './Turn'

const Turns = ({ tries, lastTry }) => {
  const code = ['R', 'G', 'B', 'Y']

  return (
    <div className="turns">
      <Turn code={code}/>
      <Turn code={code}/>
      <Turn code={code}/>
      <Turn code={null}/>
    </div>
  )
}

export default Turns
