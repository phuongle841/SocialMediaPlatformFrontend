import { useEffect, useState } from "react";
import { PostComponent } from "../../components/PostComponent";
import { setup } from "../../store/Post";
import { useDispatch, useSelector } from "react-redux";
import type { PostDTO } from "../../types/Post";
import type { fetchOptions } from "../../services/Interfaces/IPostService";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type IPostService from "../../services/Interfaces/IPostService";

export function HomePage(PostService: IPostService) {
  const postId: number = 4;
  const POST_PER_REQUEST: number = 10;
  const SKIP: number = 10;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setup(data));
  }, [data]);

  useEffect(() => {
    const options: fetchOptions = {
      id: postId,
      take: POST_PER_REQUEST,
      skip: SKIP,
      setData: setData,
    };
    PostService.fetch(options);
  }, []);

  return (
    <>
      <div className="container min-h-10 aspect-auto">
        <Header></Header>
        <div className="flex p-2">
          <SettingComp></SettingComp>
          <div className="flex-col p-2 border">
            {data != null &&
              data.map((e: PostDTO) => (
                <PostComponent {...e} key={e.postId}></PostComponent>
              ))}
          </div>
          <ContactComp></ContactComp>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

function SettingComp() {
  return (
    <>
      <h1>Setting and profile</h1>
    </>
  );
}

function ContactComp() {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}
