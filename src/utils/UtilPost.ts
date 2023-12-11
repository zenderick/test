import NotFound from "@/app/not-found";

const Isnumber = (value: string) => !/^\d+$/.test(value)

export const UtilPost = <T>(items: T[], postsPerPage = 2 ,currentPage = "1") => {

  if (!Isnumber(currentPage)) {
     NotFound();
  }

    const totalPosts = items.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage); 
    const CurrentInt = parseInt(currentPage, 10)

    if(CurrentInt > totalPages){
        throw new Error(`Page ${CurrentInt} doesn't exist`)
    }

    const ofset = (CurrentInt-1) * postsPerPage;
    const currentPost = items.slice(ofset, ofset + postsPerPage);

  return {
    totalPages, currentPost
  }
}

