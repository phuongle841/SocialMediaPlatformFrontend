import { PostComponent } from "../../components/PostComponent";
import { useDispatch, useSelector } from "react-redux";
import type { PostDTO } from "../../types/Post";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type IPostService from "../../services/Interfaces/IPostService";
import type { AppDispath, RootState } from "../../store";
import { useEffect } from "react";
import { fetchPosts } from "../../store/Post/PostThunk";

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container min-w-lg aspect-auto">
        <Header></Header>
        <div className="flex">
          <SettingPanel></SettingPanel>
          <div className="flex-col flex-auto p-2 border-r-1 border-l-1 max-w-[600px]">
            {posts.map((e: PostDTO) => (
              <PostComponent {...e} key={e.postId}></PostComponent>
            ))}
          </div>
          <TrendingPanel></TrendingPanel>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

function SettingPanel() {
  return (
    <div className="SettingPanel flex-1">
      <h1>Setting and profile</h1>
    </div>
  );
}

function TrendingPanel() {
  return (
    <div className="TrendingPanel flex-1">
      <h1>Contact</h1>
    </div>
  );
}
