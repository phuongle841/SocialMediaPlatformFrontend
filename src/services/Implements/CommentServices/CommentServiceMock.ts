import type { Comment } from "../../../types/Comment";
import type { CommonCommentInterface } from "../../Interfaces/ICommentService";
import type ICommentService from "../../Interfaces/ICommentService";
import { mockComments } from "../../../tests/Data/Comments";
export const CommentServiceMock: ICommentService = {
  FetchComments: async function (
    options: CommonCommentInterface
  ): Promise<Comment[]> {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    const comments: Comment[] = mockComments.filter(
      (comment) => comment.Post.postId == options.PostId
    );

    return comments;
  },
};
