import { MockPosts } from "../../tests/Data/Posts";
import type { PostDTO } from "../../types/Post";
import type { ProfileDTO } from "../../types/Profile";
import type {
  CommentPost,
  fetchOptions,
  SharePost,
} from "../Interfaces/IPostService";
import type IPostService from "../Interfaces/IPostService";

export const PostServiceMock: IPostService = {
  FetchPosts: async function (options: fetchOptions) {
    // await to mimic api delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const posts = MockPosts;
    return posts;
  },
  LoadPost: function (): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
  LikePost: function (): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
  CommentPost: function (data: CommentPost): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
  SharePost: function (data: SharePost): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
};
