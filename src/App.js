import { useState } from 'react';
import './App.css';
import Counterfunction from './components/Counterfunction';
function App() {
  const [counter,setCounter] = useState(0);
    //counter is a state to hold values

  function incrementCounter(){
      setCounter(counter+1)
  }
function decrementCounter(){
  setCounter(counter-1);
  if(counter<=0){
    setCounter(0)
  }
}

function resetCounter(){
  setCounter(0);
}
  return (
    <div 
    style={{display:'flex',flexdirection:'column',alignItems:'center',justifyContent:'center'}}   className="App">
      <header className="App-header">
       <h3 style={{ display:'flex',alignItems:'center',justifyContent:'center'}}>Counter Application</h3>
       <h2 style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>{counter}</h2>

       <button style={{backgroundColor:'green',color:'white',padding:'10px'}}onClick={incrementCounter  }>Increment</button>
      
       <button style={{backgroundColor:'red',color:'white',padding:'10px'}}onClick={decrementCounter}>Decrement</button>
       
       <button style={{backgroundColor:'white',color:'black',padding:'10px'}}onClick={resetCounter}>Reset</button>

      </header>
    </div>
  );
}

export default App;
