import './App.css';
import axios from "axios";
import {useState, useEffect, createRef} from "react";
import UserCard from './components/UserCard';




function App() {
  //making useState
  const [userData , setUserData] = useState({});
  const [name , setName] = useState("");
  const [error , setError] = useState("");

  const inputref = createRef();
  const buttonRef = createRef();

  //on click button
  const githubDetail = () =>{

  axios
  .get(`https://api.github.com/users/${name}`)
  .then((response) => setUserData(response.data))
  .catch((err)=>{
  //  console.log(err.response);
  if (err.response.status === 404){
    setError('user Not found')
  } else{
    setError('');
  }
  });

   inputref.current.value= ""
    }
  
    useEffect(()=>{
      inputref.current.focus();
      buttonRef.current.disabled = true;
    })

    useEffect(()=>{
      if(name.length>0){
      buttonRef.current.disabled=false;}
    },[name]);



  return (
   <>
    <div className="App">

      <h1>Get github user details</h1>

      <input type="text" className='username' 
      placeholder='user name'
      onChange=
      {(e) => setName(e.target.value)}
      ref={inputref}
      />

      <br />

      
      <button id='info-btn' 
      onClick={githubDetail}
      ref={buttonRef}
      >Get Info</button>
 
    
    < UserCard  
    userData={userData}  />
      
      {  error && <h1>{error}</h1>}


    </div>
   </>
  );
}

export default App;
