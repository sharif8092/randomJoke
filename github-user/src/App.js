import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";
import UserCard from './components/UserCard';




function App() {
  //making useState
  const [userData , setUserData] = useState({});
  const [name , setName] = useState("");


  //on click button
  const githubDetail = () =>{

  axios
  .get(`https://api.github.com/users/${name}`)
  .then((response) => setUserData(response.data));
    }




  return (
   <>
    <div className="App">
      <h1>Get github user details</h1>
      <input type="text" className='username' 
      placeholder='user name'
      onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button id='info-btn' 
      onClick={githubDetail}
      >Get Info</button>
    
    < UserCard  userData={userData}/>
      

    </div>
   </>
  );
}

export default App;
