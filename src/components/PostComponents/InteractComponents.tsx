import { useDispatch } from "react-redux";
import type { PostDTO } from "../../types/Post";
import { likePost } from "../../store/Post/Post";

export function InteractComponent({
  postId,
  LikesCount,
  CommentsCount,
}: PostDTO) {
  const dispatch = useDispatch();
  const onClickLike = () => {
    dispatch(likePost({ postId }));
  };

  return (
    <div className="Engagement flex justify-between">
      <div className="Like">
        <div>Likes - {LikesCount}</div>
        <button onClick={onClickLike}>Like</button>
      </div>
      <div className="Comment">
        <div>Comment- {CommentsCount}</div>
        <button>Comment</button>
      </div>
      <div className="Share">
        <div>Share</div>
        <button>Share</button>
      </div>
    </div>
  );
}
