import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import router from "./routes/index";
function App() {
  // TODO
  // set user cookies
  // test typescript

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
