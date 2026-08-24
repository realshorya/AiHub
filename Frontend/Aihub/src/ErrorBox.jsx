import {useContext} from "react";
import {MyContext} from "./MyContext"
import './ErrorBox.css';
export default function ErrorBox(){
    const {Message,setMessage}=useContext(MyContext);
    return(
    <div className="error-box">
        <div className="error-info">
            <i className="fa-solid fa-circle-exclamation"></i>
            <p>{Message}</p>
        </div>
        <div className="error-cross">
            <i className="fa-solid fa-x" onClick={()=> setMessage("No error")}></i>
        </div>
    </div>
    )
}