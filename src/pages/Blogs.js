import { Link } from "react-router-dom";
function Blogs({postitused}) {
    return (
        <div className="home">
            <h1>Blogipostitused</h1>
            <div className="postitused-wrapper">
                {postitused.map((post)=> {
                    return (
                        <div key={post.id} className="post-details">
                            {post.title} <Link to={"/blogs/" + post.id} >vaata</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Blogs