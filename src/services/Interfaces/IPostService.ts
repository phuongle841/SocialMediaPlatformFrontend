import type { PostDTO } from "../../types/Post";

export type fetchOptions = {
  id: number;
  take: number;
  skip: number;
};

type CommonPostInterface = {
  PostId: number;
  Reactor: number;
};

export interface CommentPost extends CommonPostInterface {
  Content: string;
}

export interface LikePost extends CommonPostInterface {
  // type of reaction
}

export interface SharePost extends CommonPostInterface{

}

export default interface IPostService {
  // reduce this by object literal
  FetchPosts(options: fetchOptions): Promise<PostDTO[]>;
  LoadPost(): Promise<PostDTO>;
  LikePost(data: LikePost): Promise<PostDTO>;
  CommentPost(data: CommentPost): Promise<PostDTO>;
  SharePost(data: SharePost): Promise<PostDTO>;
}
