import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
   if(text==='positiivisia')
   return (
      <tr><td>{text}</td><td>{value} %</td></tr> 
   )
   return (
      <tr><td>{text}</td><td>{value}</td></tr>
   )
}

const Statistics = ({goodValue, neutralValue, badValue, meanValue}) => {
   let togetherValue = 0.0
   let meanValueA = 0.0

   const together = () =>{
      togetherValue = goodValue+neutralValue+badValue
      //console.log('together ', togetherValue)
      return togetherValue
   }
   const meanValueB = () => {
      let valueTogether = 0.0
      valueTogether = together()
      meanValueA = meanValue/valueTogether
      return meanValueA
   }
   const positiveProsent = () => {
      let positive = 0.0
      positive = together()
      positive = (goodValue/positive)*100
      return positive
   }
   if (together() === 0) {
      return (
        <div>
           <h3>statistiikka</h3>
          Ei yhtään palautetta annettu
        </div>
      )
   }   
   return (
      <div>
         <h3>statistiikka</h3>
         <table><tbody>
         <Statistic text="hyvä" value ={goodValue} />
         <Statistic text="neutraali" value ={neutralValue} />
         <Statistic text="huono" value ={badValue} />
         <Statistic text="yhteensä" value ={together()} />
         <Statistic text="keskiarvo" value ={meanValueB()} />
         <Statistic text="positiivisia" value ={positiveProsent()} />
         </tbody></table>
      </div>
   )
}
const Button = ({ onClick, text }) => (
   <button onClick={onClick}>
      {text}
   </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [mean, setMean] = useState(0)
 
  const handleGoodClick = () => {
     setGood(good + 1) 
     setMean(mean + 1)
   }

  const handleNeutralClick = () => {
     setNeutral(neutral + 1) 
     setMean(mean + 0) 
  }
 
  const handleBadClick = () => {
     setBad(bad + 1)  
     setMean(mean - 1) 
   }
   
   return (
    <div>
       <h3>anna palautetta</h3>
       <div>
       <Button onClick={handleGoodClick} text='hyvä' />  
       <Button onClick={handleNeutralClick} text='neutraali' />
       <Button onClick={handleBadClick} text='huono' />  
       </div>
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} meanValue={mean} />
   </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))