import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { notFound } from "next/navigation";
import {  allPosts } from "contentlayer/generated"
import { UtilPost } from "@/utils/UtilPost";

const pos = allPosts.sort((a, b) => b.date.localeCompare(a.date));

interface Props {
  params: {
    number: string;
  }
}

export const generateStaticParams = () => {
  return Array.from({length: pos.length}).map((_,index) => ({
    number: `${index + 1}`
  }))
  }


const LayoutPage = ({params}: Props) => {

  let current;
  let tot;

  try {
     const {totalPages,currentPost} = UtilPost(pos, 2, params.number);
     current = currentPost;
     tot = totalPages;
  } catch (error) {
     notFound();
  }


    return (
      <div>
          <div className="grid gap-4 px-8">
            <PostList pos={current}/>
            {
              tot > 1 &&  <PostPagination totalPages={tot} currentPage={parseInt(params.number)} />
            }
          </div>
      </div>
    )
  }
  
  export default LayoutPage