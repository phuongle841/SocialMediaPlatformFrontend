import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PostDTO } from "../types/Post";
interface sliceStruct {
  posts: Array<PostDTO>;
}
const initialState: sliceStruct = { posts: [] };

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setup(state, action: PayloadAction<Array<PostDTO>>): void {
      state.posts = action.payload;
    },
    like: (state, action: PayloadAction<PostDTO>) => {
      const post = state.posts.find((p) => p.postId === action.payload.postId);
      if (post) {
        post.LikesCount++;
      }
    },
    comment: (state, action: PayloadAction<PostDTO>) => {},
    share(state, action: PayloadAction<PostDTO>): void {},
  },
});

export const { setup, like, comment, share } = postSlice.actions;
export default postSlice.reducer;
