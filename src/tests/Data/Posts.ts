import type { PostDTO } from "../../types/Post";
import { MockUsers } from "./Users";
export const MockPosts: PostDTO[] = [
  {
    postId: 0,
    content: "Mock post #1",
    ImageUrl:
      "https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/601969412_921615353792318_2747060843988595401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k4RhEturIr0Q7kNvwFOPO56&_nc_oc=Adkiwtc5Oc_VTASWGUSrWzoqFU14jBQGtNBoZkc8iOBJ_pSV82G5iqSAiiAGy-AdkYk&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=waoDKe-tYHGR4rlV9rxfTA&oh=00_AflLYMNKu6ByQiuE9Yhjz7MeYXcZbTRGJohCASV8Ybp9JA&oe=6951A964",
    CreatedAt: "",
    LikesCount: 10,
    CommentsCount: 2,
    profile: MockUsers[0],
  },
  {
    postId: 1,
    content: "Hello, every one, this is Yu-na-yu, welcome to bluesky",
    ImageUrl:
      "https://pbs.twimg.com/media/G8_NGl4awAAdf-x?format=png&name=900x900",
    CreatedAt: "",
    LikesCount: 1000000,
    CommentsCount: 0,
    profile: MockUsers[1],
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
    profile: MockUsers[2],
  },
];
