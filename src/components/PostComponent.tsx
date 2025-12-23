import type { PostDTO } from "../types/Post";

export const PostComponent = (post: PostDTO) => {
  let content: String[] = post.content.split(" ");
  return (
    <div className="border p-2 m-2 outline-dashed">
      <button className="">{post.postId}</button>
      <div className="PostComponent">
        {content.map((c) => {
          return <span className=" hover:bg-amber-200">{c + " "}</span>;
        })}
      </div>
    </div>
  );
};
