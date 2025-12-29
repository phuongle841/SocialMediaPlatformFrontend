import type { PostDTO } from "../../types/Post";
import type {
  fetchOptions,
  LikePost,
  CommentPost,
  SharePost,
} from "../Interfaces/IPostService";
import type IPostService from "../Interfaces/IPostService";

const url: string = import.meta.env.VITE_API_URL + "/Post";
// redesign to dependency injection fetch

const PostService: IPostService = {
  FetchPosts: async function (options: fetchOptions): Promise<PostDTO[]> {
    let posts: PostDTO[] = [];
    await fetch(url + `/${options.id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response: PostDTO[]) => {
        posts = response;
      })
      .catch((error) => console.error(error));
    return posts;
  },
  LoadPost: function (): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
  LikePost: function (data: LikePost): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
  CommentPost: function (data: CommentPost): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
  SharePost: function (data: SharePost): Promise<PostDTO> {
    throw new Error("Function not implemented.");
  },
};
export default PostService;

// FetchPosts: async (options) => {
// },
