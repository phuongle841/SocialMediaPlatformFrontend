import type { Post } from "../types/Post";
import PostService from "../services/PostService";
export const PostComponent = (post: Post) => {
  PostService.fetch(1, () => {
    console.log("working");
  });
  return (
    <>
      <button className="text-xl font-boldborder-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
        {post.postId}
      </button>
      <div className="PostComponent">{post.name}</div>
    </>
  );
};
