import {useState} from 'react'
import './App.css';
import Button from './Component/Button'; 
import Input from './Component/Input';
import * as math  from "mathjs"
function App() {
  const [text,setText]=useState("");
  const [result,setResult]=useState("");
  const addText=(value)=>{
      setText([...text,value+""])
  }
  const resetData=()=>{
    setResult("");
    setText("")
  }
  const resultDisplay=()=>{
    const input=text.join("");
    setResult(math.evaluate(input))
  }
  return (
    <div className="App">
        <div className='calc-wrapper'> 
        <Input text={text} result={result}></Input>
        <div className='row'>
          <Button symbol="7" handleClick={addText}></Button>
          <Button symbol="8" handleClick={addText}></Button>
          <Button symbol="9" handleClick={addText}></Button>
          <Button symbol="/" color="#f2a33c" handleClick={addText}></Button>
        </div>
        <div className='row'>
          <Button symbol="4" handleClick={addText}></Button>
          <Button symbol="5" handleClick={addText}></Button>
          <Button symbol="6" handleClick={addText}></Button>
          <Button symbol="*" color="#f2a33c" handleClick={addText}></Button>
        </div>
        <div className='row'>
          <Button symbol="1" handleClick={addText}></Button>
          <Button symbol="2" handleClick={addText}></Button>
          <Button symbol="3" handleClick={addText}></Button>
          <Button symbol="+" color="#f2a33c" handleClick={addText}></Button>
        </div>
        <div className='row'>
          <Button symbol="." handleClick={addText}></Button>
          <Button symbol="0" handleClick={addText}></Button>
          <Button symbol="=" handleClick={resultDisplay}></Button>
          <Button symbol="-" color="#f2a33c" handleClick={addText}></Button>
        </div>
        <Button symbol="Clear" handleClick={resetData}></Button>
        </div>
    </div>
  );
}

export default App;
