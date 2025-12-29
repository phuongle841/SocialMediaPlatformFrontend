import type { PostDTO } from "./Post";
import type { ProfileDTO } from "./Profile";

export interface Comment {
  commentId: number;
  createdAt: string;
  updatedAt: string;

  Profile: ProfileDTO;
  Post: PostDTO;

  content: string;
  ParentCommentId: number | null;
  likeCount: number;
  shareCount: number;
}
