import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    
  const [myArray, setArray] = useState([0,0,0,0,0,0])
  
  const [selected, setSelected] = useState(0)
  
  const setToArray = selected => {
    const newVote = [...myArray];
    newVote[selected] += 1;
    setArray(newVote);
  };

  const biggest = () => {
    const newArr = [...myArray];
    const biggestValue = newArr.sort((a, b) => a - b); 
    return biggestValue[5];
  }

  const biggestIndex = () => {
    const newArr2 = [...myArray];
    const biggestValue = biggest(); 
    const biggestIndex = newArr2.findIndex(k => k === biggestValue);
    return biggestIndex;
  }
   
  const setToSelected = () => {
    const begin = Math.ceil(0);
    const end = Math.floor(5);
    const ran = Math.floor(Math.random() * (end - begin +1)) + begin;
    setSelected(ran)
  }
   
  return (
    <div>
      <h3>Anecdote of the day</h3>
      {props.anecdotes[selected]}<br></br>
      has {myArray[selected]} votes
      <p></p>     
      <button onClick={() => setToArray(selected)}>Vote</button>
      <button onClick={() => setToSelected()}>next anecdote</button>
      <h3>Anecdote with most votes</h3>
      {props.anecdotes[biggestIndex()]}<br></br>
      has {biggest()} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)