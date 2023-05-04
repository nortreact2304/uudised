import { useParams } from "react-router-dom";
function Post({postitused}) {
    let {postId} = useParams();

    const postData = postitused.find(post => postId === post.id)
    return (
        <div className="home">
            <h1>{postData.title}</h1>
            <div>
                {postData.content}
            </div>
            
        </div>
    )

}

export default Post