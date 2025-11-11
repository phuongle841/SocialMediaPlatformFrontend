export interface PostDTO {
  postId: number;
  content: string;
  ImageUrl: string;
  CreatedAt: Date;
  LikesCount: number;
  CommentsCount: number;
  ProfileId: string;
}
