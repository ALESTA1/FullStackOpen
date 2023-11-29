import { useState } from 'react'

const Btn = (props)=>{

  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )

}
const Stats = (props)=>{

  const total = props.good+props.neutral+props.bad;
  if(total==0)return (
    <>
      <p>No FeedBack Yet</p>
    </>
  )
  return (
    <>
      <p>Good : {props.good}</p>
      <p>Neutral : {props.neutral}</p>
      <p>Bad : {props.bad}</p>
      <p>Total : {total}</p>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give FeedBack</h1>
      <Btn text="Good" onClick={()=>setGood(good+1)}></Btn>
      <Btn text="Neutral" onClick={()=>setNeutral(neutral+1)}></Btn>
      <Btn text="Bad" onClick={()=>setBad(bad+1)}></Btn>
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad}></Stats>
    </div>
  )
}

export default App