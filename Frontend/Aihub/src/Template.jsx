import {useContext} from "react";
import {MyContext} from "./MyContext"
import './Template.css'
export default function Template(){
    const {setStatus,setChats,setIdthread,setModelstatus}=useContext(MyContext);
    return(
        <div className="template">
            <h1>Welcome to AiHub</h1>
            <p>Start new chat to clear your doubts.</p>
            <div className="suggestion">
                <div className="item">
                    <i class="fa-solid fa-hexagon-nodes"></i>
                    Which Ai model want?</div>
                <div className="item" onClick={()=>{setStatus(true);setChats([]);setIdthread(uuidv4());setModelstatus(true);}}>
                    <i class="fa-solid fa-pencil"></i>
                    Write or edit</div>
                <div className="item hide">
                    <i class="fa-solid fa-globe"></i>
                    Look something up</div>
            </div>
        </div>
    )
}