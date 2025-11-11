import type IPostService from "../Interfaces/IPostService";

const url: string = import.meta.env.VITE_API_URL + "/Post";

const PostService: IPostService = {
  fetch: async (options) => {
    await fetch(url + `/${options.id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        options.setData(response);
      })
      .catch((error) => console.error(error));
  },
  update: function (): {} {
    throw new Error("Function not implemented.");
  },
  delete: function (): {} {
    throw new Error("Function not implemented.");
  },
};
export default PostService;
