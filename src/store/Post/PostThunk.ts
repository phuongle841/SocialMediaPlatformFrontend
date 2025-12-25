import { createAsyncThunk } from "@reduxjs/toolkit";
import type IPostService from "../../services/Interfaces/IPostService";
import type { fetchOptions } from "../../services/Interfaces/IPostService";
import type { PostDTO } from "../../types/Post";

interface FetchPostsArgs {
  service: IPostService;
  options: fetchOptions;
}

export const fetchPosts = createAsyncThunk<
  PostDTO[], // return type
  FetchPostsArgs // argument type
>("post/fetchPosts", async ({ service, options }) => {
  return await service.fetch(options);
});
