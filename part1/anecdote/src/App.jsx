import { useState } from 'react'

const Btn = (props)=>{

  return (
    <>
    <br></br>
    <button onClick={props.onClick}>Next Quote</button>
    </>
  )  
}
const Vote = (props)=>{

  return (
    <>
      <button onClick={props.onClick}>Vote</button>
    </>
  )
}
const DisplayVotes = (props)=>{

  return (
    <>
      <p>This Quote has {props.votes} votes</p>
    </>
  )
}
const MostVotedAnecDote = (props)=>{

  return (
    <>
      <p>{props.quote} with {props.points} votes</p>
    </>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [maxId,setMaxId] = useState(0);
  const handleClick = ()=>{
    const len = anecdotes.length
    var rndm = Math.random();
    rndm = Math.floor(rndm*(len));
    setSelected(rndm);
  }
  const handleVote = ()=>{
    const temp = {...points}
    temp[selected]+=1;
    var mx = 0;
    var p = 0;
    for(var i=0;i<anecdotes.length;i++){
      if(temp[i]>p){
        p=temp[i];
        mx=i;
      }
    }
    setPoints(temp)
    setMaxId(mx);
  }
  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      {<DisplayVotes votes={points[selected]}/>}
      <br></br>
      <Vote onClick = {()=>handleVote()}/>
      <Btn onClick ={handleClick}/>
      <br></br>
      <p>Anecdote with Most Votes is:</p>
      <MostVotedAnecDote quote={anecdotes[maxId]} points={points[maxId]}/>
    </div>
  )
}

export default App