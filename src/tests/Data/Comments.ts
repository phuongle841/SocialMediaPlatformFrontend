import type { Comment } from "../../types/Comment";
import { MockPosts } from "./Posts";
import { MockUsers } from "./Users";
export const mockComments: Comment[] = [
  {
    commentId: 0,
    createdAt: "",
    updatedAt: "",
    Profile: MockUsers[0],
    Post: MockPosts[0],
    content: "",
    ParentCommentId: null,
    likeCount: 0,
    shareCount: 0,
  },
  {
    commentId: 0,
    createdAt: "",
    updatedAt: "",
    Profile: MockUsers[1],
    Post: MockPosts[1],
    content: "",
    ParentCommentId: null,
    likeCount: 0,
    shareCount: 0,
  },
];
