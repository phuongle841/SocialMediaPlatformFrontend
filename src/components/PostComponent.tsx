import type { PostDTO } from "../types/Post";
import { InteractComponent } from "./PostComponents/InteractComponents";
import { PostAvatar } from "./PostComponents/PostAvatar";
import { LinkButton } from "./Button";

export const PostComponent = (post: PostDTO) => {
  return (
    <div className="PostComponent border p-2 m-2 flex">
      <PostAvatar {...post.profile}></PostAvatar>
      <div>
        <p className="hover:cursor-pointer ">
          <span className="font-semibold">{post.profile.DisplayName}</span>.
          <span>@{post.profile.Email}-</span>
          <span>Posted at {post.CreatedAt}</span>
        </p>
        <p>{post.content}</p>
        <div className="Images">
          <img src={post.ImageUrl} alt="" />
        </div>
        <InteractComponent {...post}></InteractComponent>
      </div>
    </div>
  );
};
