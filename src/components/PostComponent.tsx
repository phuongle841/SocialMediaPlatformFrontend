import type { PostDTO } from "../types/Post";
import type { RootState } from "../store";
import { like, comment, share } from "../store/Post";
import { useDispatch, useSelector } from "react-redux";

export const PostComponent = (post: PostDTO) => {
  let content: String[] = post.content.split(" ");
  const value = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  return (
    <div className="PostComponent border p-2 m-2">
      <button onClick={() => dispatch(like(post))}>
        Click to change post value
      </button>
      <button className="">{post.postId}</button>
      <div></div>
      <span>Posted at {post.CreatedAt.toString()}</span>
      <div></div>
      <span>{content}</span>
      <div className="Images">
        <img src={post.ImageUrl} alt="" />
      </div>
      <div className="Engagement flex justify-between">
        <div className="Like">
          <div>Likes - {post.LikesCount}</div>
          <button>Like</button>
        </div>
        <div className="Comment">
          <div>Comment- {post.CommentsCount}</div>
          <button>Comment</button>
        </div>
        <div className="Share">
          <div>Share- {post.LikesCount}</div>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};
