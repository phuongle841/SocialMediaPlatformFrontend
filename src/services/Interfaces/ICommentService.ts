import type { Comment } from "../../types/Comment";

export interface CommonCommentInterface {
  PostId: number;
  take: number;
  skip: number;
}
export default interface ICommentService {
  FetchComments(options: CommonCommentInterface): Promise<Comment[]>;
}
