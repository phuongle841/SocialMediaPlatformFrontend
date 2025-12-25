import type { PostDTO } from "../../types/Post";

export type fetchOptions = {
  id: number;
  take: number;
  skip: number;
};

export default interface IPostService {
  // reduce this by object literal
  fetch(options: fetchOptions): Promise<PostDTO[]>;
  update: () => {};
  delete: () => {};
}
