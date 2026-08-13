import {useRef,useEffect,useContext,useState,useLayoutEffect} from 'react';
import {MyContext} from './MyContext';
import { HashLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"
import './Chatbox.css'

const override = {
        display: "block",
        marginLeft: "4rem",
        marginTop: "2.5rem",
        borderColor: "red",
        };

export default function Chatbox(){

    const {chats,loader,reply,setReply} = useContext(MyContext);
    let[latestreply,setLatestReply] = useState(null);
    const chatRef = useRef(null);
    const firstRender = useRef(true);

    useEffect(() => {
        const box = chatRef.current;
        if (box) {
            box.scrollTop = box.scrollHeight;
        }
    }, [chats,latestreply]);

    useLayoutEffect(()=>{
        // Don't apply typing effect when component first loads
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if(!reply || !chats?.length) return;
        setLatestReply("")
        const content = reply.split(" ");
        let idx=0;
        const interval = setInterval(()=>{
            setLatestReply(content.slice(0,idx+1).join(" "));
            idx++;
            if(idx >= content.length){
              clearInterval(interval);  
              setReply(null);
            }
        },40);
        return ()=> clearInterval(interval);
    },[reply]);

    const lastIndex= chats
        .map((chat, index) => chat.role === "assistant" ? index : -1)
        .filter(index => index !== -1)
        .pop();

    return(
        <div className="response-box" ref={chatRef}>
            {
                chats.map((data,idx)=>(data.role==="user"?(
                    <div className="user-response user-chat" key={idx} >
                        <p>{data.content}</p>
                    </div>)
                :(<div className="assistant-chat" key={idx} >
                    {idx === lastIndex && reply !== null? (
                        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                            {latestreply || ""}
                        </ReactMarkdown>
                    ) : (
                        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                            {data.content}
                        </ReactMarkdown>
                    )}
                </div>)))
            }
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