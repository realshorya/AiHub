import {MyContext} from './MyContext';
import {useContext,useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Auth.css';

export default function App() {
    const {isLoading, isAuthenticated, error, loginWithRedirect: login, logout: auth0Logout, user} = useAuth0();

    const signup = () =>{
    login({ authorizationParams: { screen_hint: "signup" } });
    }

  return(
        <>
          <h1 className="recent-title">Recents</h1>
          <div className="auth-box">
          <h4>Create account for Free</h4>
          <div>
          {isAuthenticated ?<></>:<><button className="auth-button" onClick={signup}>Signup</button>
          <button className="auth-button" onClick={login}>Login</button></>}
          </div>
          <h4></h4>
          </div>
        </>
  )
}
