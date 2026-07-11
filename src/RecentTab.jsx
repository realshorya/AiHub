import {MyContext} from './MyContext';
import {useContext} from 'react';
import './RecentTab.css';

export default function RecentTab(){

    const {thread,setStatus,setCurrchat,setIdthread,setCurrmodel,setModelstatus,Message,setMessage,getThread,model,setModel} = useContext(MyContext);

    let handlestatus=()=>{
        setStatus(true);
    }

    function currThread(id){
        let result = thread.find((data)=>String(data.threadId)===String(id));
        setModel(result.model);
        setCurrmodel(result.model);
        setModelstatus(false);
        setCurrchat(result.messages);
        setIdthread(result.threadId);
    }

    let deleteThread= async (id)=>{
        try{
            let response = await fetch(`${import.meta.env.VITE_API_URL}/threads/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const data = await response.json();
            if (!response.ok) {
                setMessage(data.error);
                throw new Message(data.error);
            }
            setMessage(data.success);
            getThread();
        }catch(err){
            setMessage(err.message);
        }
    }
    return(
            <>
            <h1 className="recent-title">Recents</h1>
            <div className="history">
                {thread.map((data,idx)=>(
                    <div className="history-info" key={idx}>
                        <div className="title" onClick={()=>{currThread(data.threadId);handlestatus();}}>{data.title}</div>
                        <div className="del" onClick={()=>deleteThread(data.threadId)}><i class="fa-regular fa-trash-can"></i></div>
                    </div>))}
            </div>
            </>
    )
}