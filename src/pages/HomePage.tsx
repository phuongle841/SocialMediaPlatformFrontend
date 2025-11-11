import { useEffect, useState } from "react";
import { PostComponent } from "../components/PostComponent";
import type { PostDTO } from "../types/Post";
import type { fetchOptions } from "../services/Interfaces/IPostService";
import PostService from "../services/Implements/PostService";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function HomePage() {
  const postId: number = 4;
  const POST_PER_REQUEST: number = 10;
  const SKIP: number = 10;
  const [data, setData] = useState([
    {
      postId: 0,
      content: "this is the content of the post",
      ImageUrl: "",
      CreatedAt: new Date(),
      LikesCount: 0,
      CommentsCount: 0,
      ProfileId: "",
    },
    {
      postId: 2,
      content: "this is the content of the post",
      ImageUrl: "",
      CreatedAt: new Date(),
      LikesCount: 0,
      CommentsCount: 0,
      ProfileId: "",
    },
  ]);

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
      <Header></Header>
      <div className="flex bg-zinc-200 gap-x-4 shrink-0  p-6 ">
        <SettingComp></SettingComp>
        <div className="flex flex-col gap-4 bg-blue-500">
          {data != null &&
            data.map((e: PostDTO) => <PostComponent {...e}></PostComponent>)}
        </div>
        <ContactComp></ContactComp>
      </div>
      <Footer></Footer>
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
