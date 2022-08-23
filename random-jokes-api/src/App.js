
import './App.css';
import {useState , useEffect} from "react";
import axios from "axios";


function App() {
const [text, setText] = useState("jokes is comming")
function nextJokes(){
  axios.get("https://api.chucknorris.io/jokes/random").then
  ((responce)=> setText(responce.data.value))
}
  return (
    <div id='main-div' >
      <h1>{text}</h1>
     <button on onClick={nextJokes}>get jokes</button>
    </div>
  );
}

export default App;
