import { useParams } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

function Post({postitused}) {
    let {postId} = useParams();

    const renderOption = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            return (<img
              src={`https://${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt="??"
            />)
          }
        }
      }
     
    const postData = postitused.find(post => postId === post.id)
    return (
        <div className="home">
            <h1>{postData.title}</h1>
            <img className="postHeaderImage" src={postData.pictureUrl} alt={postData.title} />
            <div>
                {documentToReactComponents(postData.richContent)}
            </div>
            
        </div>
    )

}

export default Post