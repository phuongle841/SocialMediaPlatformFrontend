import { PostComponent } from "../components/PostComponent";

export function HomePage() {
  return (
    <div>
      <h1>THIS IS HOME PAGE MOTHER FUCKERS!!!</h1>
      <PostComponent
        postId={0}
        name={"this is post component"}
        foo={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></PostComponent>
    </div>
  );
}
