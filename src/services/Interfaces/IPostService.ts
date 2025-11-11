export type fetchOptions = {
  id: number;
  take: number;
  skip: number;
  setData: Function;
};

export default interface IPostService {
  // reduce this by object literal
  fetch: (options: fetchOptions) => {};
  update: () => {};
  delete: () => {};
}
