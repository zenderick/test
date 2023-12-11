import { Post } from "contentlayer/generated"
import PostItem from "./PostItem"


interface Props{
    pos: Post[],
}

const PostList = ({pos}: Props) => {
  return (
    <div>
        {
          pos.map((pos)=> (
            <PostItem key={pos._raw.flattenedPath} pos={pos} />
          ))
        }
    </div>
  )
}

export default PostList