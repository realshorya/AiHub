import {useState,useEffect} from 'react';
import {MyContext} from './MyContext';
import { v4 as uuidv4 } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import './App.css'

function App() {

  const {isLoading, isAuthenticated, error, loginWithRedirect: login, logout: auth0Logout, user} = useAuth0();

  let[thread,setThread]=useState([]);
  let[currchat,setCurrchat]=useState([]);
  let[idthread,setIdthread]=useState(uuidv4());
  let[status,setStatus]=useState(false);
  let[query,setQuery]=useState("");
  let[chats,setChats]=useState([]);
  let[model,setModel]=useState("Select a model");
  let[currmodel,setCurrmodel]=useState(null);
  let[modelstatus,setModelstatus]=useState(true);
  let[loader,setLoader]=useState(false);
  let[Message,setMessage]=useState("No error");
  let[show,setShow]=useState(true);

  
  const getThread = async()=>{
    try{
      const response = await fetch(`http://localhost:8080/threads`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:user?user.email:"Guest",
        })
      });
      const jsonResponse = await response.json();
      setThread(jsonResponse);
    }catch(err){
      setMessage("Server is not working!");
    }
  }
  
  const providerValues = {
    currchat,setCurrchat,
    idthread,setIdthread,
    status,setStatus,
    thread,
    query,setQuery,
    chats,setChats,
    model,setModel,
    currmodel,setCurrmodel,
    modelstatus,setModelstatus,
    loader,setLoader,
    Message,setMessage,
    getThread,
    show,setShow,
  };

  useEffect(() => {
      if (!Message) return;

      const timer = setTimeout(() => {
          setMessage("No error");
      }, 5000);

      return () => clearTimeout(timer);
  }, [Message]);

  useEffect(()=>{
    if(!isLoading){
      getThread();
      if(isAuthenticated){
        setMessage(`Welcome back ${user.name}!`);
      }else{
        setMessage("You have only 5 chat responses available. Login to increase chat limit.")
      }
    }
  },[isLoading]);
  return (
    <div className="main">
      <MyContext.Provider value={providerValues}>
        <Sidebar></Sidebar>
        <Chat></Chat>
      </MyContext.Provider>
    </div>
  )
}

export default App
