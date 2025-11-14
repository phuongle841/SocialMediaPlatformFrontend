import { createBrowserRouter } from "react-router";
import { VideoPage } from "../pages/VideoPage";
import { HomePageFactory } from "../pages/HomePage/HomePageFactory";
import { PostServiceMock } from "../services/Implements/PostServiceMock";

const homePage = HomePageFactory(PostServiceMock);
const router = createBrowserRouter([
  { path: "/", Component: homePage },
  { path: "/vidoes", Component: VideoPage },
]);
export default router;
