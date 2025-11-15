import { createBrowserRouter } from "react-router";
import { VideoPage } from "../pages/VideoPage/VideoPage";
import { HomePageFactory } from "../pages/HomePage/HomePageFactory";
import { PostServiceMock } from "../services/Implements/PostServiceMock";

const homePage = HomePageFactory(PostServiceMock);
const router = createBrowserRouter([
  { path: "/", Component: homePage },
  { path: "/Search", Component: homePage },
  { path: "/profile", Component: homePage },
  { path: "/newPost", Component: homePage },
  { path: "/friends", Component: VideoPage },
  { path: "/message", Component: VideoPage },
  { path: "/vidoes", Component: VideoPage },
]);
export default router;
