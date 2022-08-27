
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const [Tag, setTag] = useState("div")

  function changeHandler(event){
    let inputText = event.target.value
    setText(inputText)
  }

  function changeTag(input){
    switch(input){
      case"h1":
        setTag("h1");
        break;
      
      case"h2":
        setTag("h2");
        break;

      case "h3":
        setTag("h3");
        break;


    }

  }

  return (
    <div className="App">
      <input type="text" onChange = {(event) => {changeHandler(event)}}></input>
      <Tag>{text}</Tag>
      <button onClick = {()=> changeTag("h1")}>h1</button>
      <button onClick = {()=> changeTag("h2")} >h2</button>
      <button onClick = {()=> changeTag("h3")}>h3</button>
    </div>
  );
}

export default App;
