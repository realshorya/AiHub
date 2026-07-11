import {MyContext} from './MyContext';
import {useContext,useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";
import RecentTab from './RecentTab';
import Auth from './Auth';
import './App.css'
import './Sidebar.css'

export default function sidebar(){

    const {setStatus,setChats,setIdthread,setModelstatus,show,setShow,modelstatus,model,currmodel} = useContext(MyContext);
    const {isLoading, isAuthenticated, error, loginWithRedirect: login, logout: auth0Logout, user} = useAuth0();

    const logout = () =>{
        auth0Logout({ logoutParams: { returnTo: window.location.origin } });
    }
    if (isLoading) return "Loading...";
    return(
        <div className="sidebar" style={{display:show?"block":"none"}}>
            <div className="head">
                <i class="fa-solid fa-hexagon-nodes icon"></i>
                <h1 className="name">AiHub</h1>
                <h1 className="name-extra">{modelstatus?` - ${model}`:` - ${currmodel}`}</h1>
                <i className="fa-solid fa-bars icon nav-close-icon" onClick={()=> setShow(!show)}></i>
            </div>
            <div className="functions">
                <a onClick={()=>{setStatus(true);setChats([]);setIdthread(uuidv4());setModelstatus(true);}}><i class="fa-regular fa-pen-to-square"></i>New Chat</a>
                <a><i class="fa-solid fa-spinner"></i>Upcoming Features</a>
            </div>
            {isAuthenticated?<RecentTab></RecentTab>:<Auth></Auth>}
            <div className="user-info">
                {user?<img src={user.picture}></img>:<i class="fa-solid fa-circle-user"></i>}
                <p>{user?user.name:"Guest"}</p>
                {isAuthenticated ?<button className="auth-button-logout" onClick={logout}>Logout</button>:<p></p>}
            </div>
        </div>
    )
}