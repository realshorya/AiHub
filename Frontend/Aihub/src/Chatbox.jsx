import {useState,useEffect,useContext} from 'react';
import {MyContext} from './MyContext';
import { HashLoader } from "react-spinners"
import './Chatbox.css'

const override = {
        display: "block",
        marginLeft: "4rem",
        marginTop: "2.5rem",
        borderColor: "red",
        };

export default function Chatbox(){

    const {chats,loader} = useContext(MyContext);

    return(
        <div className="response-box">
        {chats.map((data,idx)=>(data.role==="user"?(<div className="user-response user-chat" key={idx} ><h3>{data.role}</h3><p>{data.content}</p></div>)
        :(<div className="user-response assistant-chat" key={idx} ><h3>{data.role}</h3><p>{data.content}</p></div>)))}
        <HashLoader className="loader"
            color="#fff"
            loading={loader}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
    )
}