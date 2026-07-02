import './Template.css'
export default function Template(){
    return(
        <div className="template">
            <h1>Welcome to AiHub</h1>
            <p>Start new chat to clear your doubts.</p>
            <div className="suggestion">
                <div className="item">
                    <i class="fa-solid fa-hexagon-nodes"></i>
                    Which Ai model want?</div>
                <div className="item">
                    <i class="fa-solid fa-pencil"></i>
                    Write or edit</div>
                <div className="item hide">
                    <i class="fa-solid fa-globe"></i>
                    Look something up</div>
            </div>
        </div>
    )
}