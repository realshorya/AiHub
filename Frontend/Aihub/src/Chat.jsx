import {useState,useEffect,useContext} from "react";
import {MyContext} from "./MyContext"
import { useAuth0 } from "@auth0/auth0-react";
import Chatbox from "./Chatbox";
import Template from "./Template";
import ErrorBox from "./ErrorBox";
import './Chat.css'

export default function Chat(){

    const {isLoading, isAuthenticated, error, loginWithRedirect: login, logout: auth0Logout, user} = useAuth0();
    const {currchat,idthread,status,setChats,query,setQuery,chats,model,setModel,currmodel,setCurrmodel,
        modelstatus,setModelstatus,setLoader,Message,setMessage,setStatus,getThread,setShow,show} = useContext(MyContext);

    useEffect(()=>{
        setChats(currchat);
    },[currchat])

    const reply= async()=>{
        try{
            const response= await fetch(`http://localhost:8080/chats`, {
            method: "POST",
            credentials:"include",
            headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    query:query,
                    threadID:idthread,
                    model: modelstatus?model:currmodel,
                    email:user?user.email:"Guest"})
            });
            const resChat = await response.json();
            if(!response.ok){
                setStatus(false);
                return setMessage(resChat.error);
            }
            setLoader(false);
            addChat(resChat);
            getThread();
        }catch(err){
            setMessage(err.message);
        }finally{
            setLoader(false);
        }
    };
    
    function userResponse(){
        let chat = {
            role:"user",
            content:query,
            timestamp: new Date(),
        }
        addChat(chat);
    }

    let addChat=(newChat)=>{
        setChats((prevChats)=>{
            return [...prevChats,newChat]
        })
    }

    let handleSubmit=async(event)=>{
        event.preventDefault();
        setLoader(true);
        userResponse();
        setCurrmodel(model);
        setModelstatus(false);
        reply();
        setQuery("");
    }
    return(
        <div className="chat">
            <div className="nav-bar">
                <div className="logo-area">
                    <i class="fa-solid fa-bars icon nav-open-icon" onClick={()=> setShow(!show)}></i>
                    <h1 className="logo-name">AiHub</h1>
                    <h1 className="logo-name-extra">{modelstatus?` - ${model}`:` - ${currmodel}`}</h1>
                </div>
                {modelstatus === true?
                <>
                <div className="models">
                    <select defaultValue={model} onChange={(e)=>{setModel(e.target.value)}} required>
                        <option value="Select a model">Select a model</option>
                        <option value="ChatGPT">ChatGPT</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Claude">Claude</option>
                        <option value="Deepseek">DeepSeek</option>
                    </select>
                </div>
                </>:null}
                <i className="fa-solid fa-ellipsis icon"></i>
            </div>
            {Message==="No error"?null:<ErrorBox/>}
            <div className="main-area">
                {status===true?<Chatbox></Chatbox>:<Template></Template>}
            </div>
                {status===true?
            <div className="bottom">
                <form onSubmit={handleSubmit}>
                    <input placeholder="Search Query" value={query} onChange={(e)=>{setQuery(e.target.value)}} required></input>
                    <button disabled={model === "Select a model"}><i class="fa-regular fa-paper-plane"></i></button>
                </form>
                <p>AiHub can make mistake. Check important info.</p>
            </div>:null}
        </div>
    )
}