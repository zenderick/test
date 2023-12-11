import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { UtilPost } from "@/utils/UtilPost";
import {  allPosts } from "contentlayer/generated"

const pos = allPosts.sort((a, b) => b.date.localeCompare(a.date));


export const metadata = {
  title: 'Lista de Posts',
  description: 'Description posts'
}

const Post = () => {
  const {currentPost, totalPages} = UtilPost(pos);

  return (
    <div>
      <div className="grid gap-4 px-8">
        <PostList pos={currentPost}/>
        {
           totalPages > 1 &&  <PostPagination totalPages={totalPages}/>
        }
      </div>
    </div>
  )
}

export default Post