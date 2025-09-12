import "./App.css";
import { PostComponent } from "./components/PostComponent";
import type { Post } from "./types/Post";
import { store } from "./store";
import { Provider } from "react-redux";
import { NotificationComponent } from "./components/NotificationComponent";
import { RouterProvider } from "react-router";
import router from "./routes/index";
function App() {
  // TODO
  // set user cookies
  // test typescript
  const post: Post = {
    postId: 0,
    name: "It's awesome",
    foo: function (): void {
      throw new Error("Function not implemented.");
    },
  };

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
