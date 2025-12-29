import type { Button } from "../../components/Button";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmailIcon from "@mui/icons-material/Email";
import PeopleIcon from "@mui/icons-material/People";
import Person2Icon from "@mui/icons-material/Person2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const SettingOptions: Array<Button> = [
  {
    name: "Home",
    patch: "",
    Icon: HomeIcon,
  },
  {
    name: "Explore",
    patch: "",
    Icon: ExploreIcon,
  },
  {
    name: "Notification",
    patch: "",
    Icon: NotificationsNoneIcon,
  },
  {
    name: "Follow",
    patch: "",
    Icon: BookmarkIcon,
  },
  {
    name: "Chat",
    patch: "",
    Icon: EmailIcon,
  },
  {
    name: "Community",
    patch: "",
    Icon: PeopleIcon,
  },
  {
    name: "Profile",
    patch: "/profile",
    Icon: Person2Icon,
  },
  {
    name: "More",
    patch: "",
    Icon: MoreHorizIcon,
  },
];
