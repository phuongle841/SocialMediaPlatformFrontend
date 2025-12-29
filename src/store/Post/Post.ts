import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PostDTO } from "../../types/Post";
import { fetchPosts } from "./PostThunk";

interface PostSliceState {
  posts: Array<PostDTO>;
  loading: boolean;
  error?: string;
}
const initialState: PostSliceState = { posts: [], loading: false };

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setupPost(state, action: PayloadAction<Array<PostDTO>>): void {
      state.posts = action.payload;
    },
    likePost: (state, action: PayloadAction<{ postId: number }>) => {
      const post = state.posts.find((p) => p.postId == action.payload.postId);
      if (post) {
        post.LikesCount = (post.LikesCount ?? 0) + 1;
      }
    },
    commentPost: (state, action: PayloadAction<PostDTO>) => {
      const post = state.posts.find((p) => p.postId === action.payload.postId);
      if (post) {
        post.CommentsCount= (post.CommentsCount ?? 0) + 1;
      }
    },
    sharePost(state, action: PayloadAction<PostDTO>): void {
      const post = state.posts.find((p) => p.postId === action.payload.postId);
      if (post) {
        post.CommentsCount= (post.CommentsCount ?? 0) + 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setupPost, likePost, commentPost, sharePost } =
  postSlice.actions;
export default postSlice.reducer;
