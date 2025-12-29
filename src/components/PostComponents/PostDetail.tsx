import type { PostDTO } from "../../types/Post";

function PostDetail({}: PostDTO) {
  return (
    <div>
      <p>this is the post with details- comment, full description</p>
    </div>
  );
}
