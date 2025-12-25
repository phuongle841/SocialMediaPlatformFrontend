import type { ProfileDTO } from "./Profile";

export interface PostDTO {
  postId: number;
  content: string;
  ImageUrl: string;
  CreatedAt: string;
  LikesCount: number;
  CommentsCount: number;
  profile: ProfileDTO;
}
