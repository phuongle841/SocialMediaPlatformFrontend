import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
import { VideoPage } from "../pages/VideoPage";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/vidoes", Component: VideoPage },
]);
export default router;
