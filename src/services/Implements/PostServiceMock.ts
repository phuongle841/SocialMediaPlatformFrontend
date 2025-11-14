import type { PostDTO } from "../../types/Post";
import type { fetchOptions } from "../Interfaces/IPostService";
import type IPostService from "../Interfaces/IPostService";

export const PostServiceMock: IPostService = {
  fetch: async function (options: fetchOptions) {
    // await to mimic api delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockData: PostDTO[] = [
      {
        postId: options.id,
        content: "Mock post #1",
        ImageUrl: "",
        CreatedAt: new Date(),
        LikesCount: 10,
        CommentsCount: 2,
        ProfileId: "mock_user_1",
      },
      {
        postId: options.id + 1,
        content: "Mock post #2",
        ImageUrl: "",
        CreatedAt: new Date(),
        LikesCount: 4,
        CommentsCount: 1,
        ProfileId: "mock_user_2",
      },
    ];

    // Update the state passed from HomePage
    options.setData(mockData);
  },
  update: function (): {} {
    throw new Error("Function not implemented.");
  },
  delete: function (): {} {
    throw new Error("Function not implemented.");
  },
};
