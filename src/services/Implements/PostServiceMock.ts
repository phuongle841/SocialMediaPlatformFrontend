import type { PostDTO } from "../../types/Post";
import type { ProfileDTO } from "../../types/Profile";
import type { fetchOptions } from "../Interfaces/IPostService";
import type IPostService from "../Interfaces/IPostService";

export const PostServiceMock: IPostService = {
  fetch: async function (options: fetchOptions) {
    // await to mimic api delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const mock_user_1: ProfileDTO = {
      ProfileId: 0,
      Email: "Phuongleminh841@gmail.com",
      DisplayName: "Columbina's left ball",
      ProfilePicture:
        "https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/451873851_2194454344254599_7489112632263919315_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2ghe979RwZQQ7kNvwFmvH6Y&_nc_oc=AdkN5zCxvgpRrHPu352o7j49TwozirYLd-t4rfx47_P-V6RoxvRuB-FnxfRzluE4eOY&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=S5EYZDWaYL6uOXbD7-aD4A&oh=00_AflrOIIFT8rrb6p1DUt_i-ikWERkI4bova9-v-gThNWI3g&oe=6952D577",
      Bio: "Respect to 2 gentlemen in Paris.",
      DateOfBirth: new Date(1, 1, 2002).toUTCString(),
      IsActive: false,
    };
    const mockData: PostDTO[] = [
      {
        postId: 0,
        content: "Mock post #1",
        ImageUrl:
          "https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/601969412_921615353792318_2747060843988595401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k4RhEturIr0Q7kNvwFOPO56&_nc_oc=Adkiwtc5Oc_VTASWGUSrWzoqFU14jBQGtNBoZkc8iOBJ_pSV82G5iqSAiiAGy-AdkYk&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=waoDKe-tYHGR4rlV9rxfTA&oh=00_AflLYMNKu6ByQiuE9Yhjz7MeYXcZbTRGJohCASV8Ybp9JA&oe=6951A964",
        CreatedAt: "",
        LikesCount: 10,
        CommentsCount: 2,
        profile: mock_user_1,
      },
      {
        postId: 1,
        content: "Hello, every one, this is Yunayu, welcome to bluesky",
        ImageUrl:
          "https://pbs.twimg.com/media/G8_NGl4awAAdf-x?format=png&name=900x900",
        CreatedAt: "",
        LikesCount: 1000000,
        CommentsCount: 0,
        profile: mock_user_1,
      },
      {
        postId: 2,
        content: "Mock post #2",
        ImageUrl:
          // "https://fapello.com/content/a/i/ain-nguyen/2000/ain-nguyen_1377.jpg",
          "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:k7dn4xwqraf4psmqwu6oixv7/bafkreihtqgk4qlyxacw4hc7uubhlpk5qfktfswj47nk66tuv56wsfi5kha@jpeg",
        CreatedAt: "",
        LikesCount: 4,
        CommentsCount: 1,
        profile: mock_user_1,
      },
    ];

    // Update the state passed from HomePage
    return mockData;
  },
  update: function (): {} {
    throw new Error("Function not implemented.");
  },
  delete: function (): {} {
    throw new Error("Function not implemented.");
  },
};
