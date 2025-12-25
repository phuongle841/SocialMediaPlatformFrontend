import type IPostService from "../../services/Interfaces/IPostService";
import { HomePage } from "./HomePage";

export const HomePageFactory = (Service: IPostService) => {
  return () => <HomePage PostService={Service}></HomePage>;
};
