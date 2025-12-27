import { PostComponent } from "../../components/PostComponent";
import { useDispatch, useSelector } from "react-redux";
import type { PostDTO } from "../../types/Post";
import type IPostService from "../../services/Interfaces/IPostService";
import type { AppDispath, RootState } from "../../store";
import { useEffect } from "react";
import { fetchPosts } from "../../store/Post/PostThunk";
import { LinkButton, type Button } from "../../components/Button";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmailIcon from "@mui/icons-material/Email";
import PeopleIcon from "@mui/icons-material/People";

interface HomePageProp {
  PostService: IPostService;
}

export function HomePage({ PostService }: HomePageProp) {
  const dispatch = useDispatch<AppDispath>();
  const { posts, loading } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(
      fetchPosts({
        service: PostService,
        options: {
          id: 0,
          take: 10,
          skip: 10,
        },
      })
    );
  }, [dispatch, PostService]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="container bg-black flex justify-center aspect-auto text-white active:text-white">
      <SettingPanel></SettingPanel>
      <div className="flex-col flex-auto p-3 border-r-1 border-l-1 max-w-[600px]">
        {posts.map((e: PostDTO) => (
          <PostComponent {...e} key={e.postId}></PostComponent>
        ))}
      </div>
      <TrendingPanel></TrendingPanel>
    </div>
  );
}

function SettingPanel() {
  const buttons: Array<Button> = [
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
  ];
  return (
    <div className="SettingPanel text-lg">
      <div className="flex flex-col ">
        {buttons.map((e) => (
          <LinkButton key={e.name} {...e}></LinkButton>
        ))}
      </div>
      <p>More...</p>
      <p>Post</p>
      <p>Phuongleminh841@gmail.com</p>
    </div>
  );
}

function TrendingPanel() {
  return (
    <div className="border">
      <div className="TrendingPanel ">
        <p>Search</p>
        <div className="News">
          <p>Today's new</p>
        </div>
        <div className="Trending border">
          <p>What's happening</p>
        </div>
        <div className="Suggest following">
          <p>Who to follow</p>
        </div>
      </div>
    </div>
  );
}
