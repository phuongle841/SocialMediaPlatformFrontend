import { createBrowserRouter } from "react-router";
import { VideoPage } from "../pages/VideoPage/VideoPage";
import { HomePageFactory } from "../pages/HomePage/HomePageFactory";
import { PostServiceMock } from "../services/Implements/PostServiceMock";
import { SearchPage } from "../pages/Search/SearchPage";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { NewPostPage } from "../pages/NewPost/NewPostPage";
import FriendPage from "../pages/Friend/FriendPage";
import MessagePage from "../pages/Message/MessagePage";

import type { JSX } from "react";
const homePage = HomePageFactory(PostServiceMock);
interface directory {
  path: string;
  Component: () => JSX.Element | null;
  name: string;
  icon: () => JSX.Element | null;
  hidden: boolean;
}
export const route: Array<directory> = [
  {
    path: "/",
    Component: homePage,
    name: "Home",
    icon: function (): JSX.Element | null {
      throw new Error("Function not implemented.");
    },
    hidden: false,
  },
  {
    path: "/Search",
    Component: SearchPage,
    name: "Search",
    icon: function (): JSX.Element | null {
      throw new Error("Function not implemented.");
    },
    hidden: false,
  },
  {
    path: "/Profile",
    Component: ProfilePage,
    name: "Profile",
    icon: function (): JSX.Element | null {
      throw new Error("Function not implemented.");
    },
    hidden: false,
  },
  {
    path: "/newPost",
    Component: NewPostPage,
    name: "Create New Post",
    icon: function (): JSX.Element | null {
      throw new Error("Function not implemented.");
    },
    hidden: false,
  },
  {
    path: "/Friends",
    Component: FriendPage,
    name: "Friend",
    icon: function (): JSX.Element | null {
      throw new Error("Function not implemented.");
    },
    hidden: false,
  },
  {
    path: "/Message",
    Component: MessagePage,
    name: "Message",
    icon: function (): JSX.Element | null {
      throw new Error("Function not implemented.");
    },
    hidden: false,
  },
  {
    path: "/Vidoes",
    Component: VideoPage,
    name: "Videos",
    icon: function (): JSX.Element | null {
      throw new Error("Function not implemented.");
    },
    hidden: false,
  },
];
const router = createBrowserRouter(route);
export default router;
