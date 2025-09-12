const url: string = import.meta.env.VITE_API_URL;
const PostService = {
  fetch: async (id: number, setData: Function) => {
    console.log(url);
  },
};
export default PostService;
