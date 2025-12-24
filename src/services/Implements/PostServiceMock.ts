import type { PostDTO } from "../../types/Post";
import type { fetchOptions } from "../Interfaces/IPostService";
import type IPostService from "../Interfaces/IPostService";

export const PostServiceMock: IPostService = {
  fetch: async function (options: fetchOptions) {
    // await to mimic api delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockData: PostDTO[] = [
      {
        postId: options.id,
        content: "Mock post #1",
        ImageUrl:
          "https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/600213739_1195012792834590_9184876713856400424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WLTpp9fniq4Q7kNvwGUuXfS&_nc_oc=Adms069FiEmsFUE3GndajG82HoSspzgtQGVKLNtkEI4R924x5YlOwEalTgGEMAponLM&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=cblT7j7O3gV0f3eHvCEeFQ&oh=00_AfkMwmVGy2VDkQSlDeAJmwq0lM5O9y1qgaiTEv5MGyNh7Q&oe=69512625",
        CreatedAt: new Date(),
        LikesCount: 10,
        CommentsCount: 2,
        ProfileId: "mock_user_1",
      },
      {
        postId: options.id + 1,
        content: "Mock post #2",
        ImageUrl:
          "https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/601969412_921615353792318_2747060843988595401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k4RhEturIr0Q7kNvwFOPO56&_nc_oc=Adkiwtc5Oc_VTASWGUSrWzoqFU14jBQGtNBoZkc8iOBJ_pSV82G5iqSAiiAGy-AdkYk&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=waoDKe-tYHGR4rlV9rxfTA&oh=00_AflLYMNKu6ByQiuE9Yhjz7MeYXcZbTRGJohCASV8Ybp9JA&oe=6951A964",
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
