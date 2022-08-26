
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState()
  const [element, setElement] = useState(<div>{text}</div>)
  function changeHandler(event){
    let inputText = event.target.value
    setText(inputText)
    setElement(<div>{inputText}</div>)
    
  }

  function changeElement(input){
    switch (input){
      case ("h1"):
        return (setElement(<h1>{text}</h1>));
        break;
      case ("h2"):
        return (setElement(<h2>{text}</h2>));
        break;

        case ("h3"):
          return (setElement(<h3>{text}</h3>));
          break;
    }
  }
  return (
    <div className="App">
      <input type = "text" onChange={(event)=>{changeHandler(event)}}></input>
      <button onClick={()=> changeElement("h1")}>h1</button>
      <button onClick={()=> changeElement("h2")}>h2</button>
      <button onClick={()=> changeElement("h3")}>h3</button>
      {element}

    </div>
  );
}

export default App;
