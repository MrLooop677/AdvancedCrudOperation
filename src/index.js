import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Index from "./pages/Index";
import ErrorElement from "./pages/ErrorElement";
import { Provider } from "react-redux";
import store from "./state/store";
const AddPost = React.lazy(() => import("./pages/AddPost"));
const EditPost = React.lazy(() => import("./pages/EditPost"));
const DetailPost = React.lazy(() => import("./pages/DetailPost"));
const postParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "please make sure to insert correct id",
      status: 400,
    });
  }
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      {
        path: "post/add",
        element: (
          <Suspense fallback="Please wait for loading component">
            {" "}
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback="Please wait for loading component">
            <EditPost />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback="Please wait for loading component">
            <DetailPost />
          </Suspense>
        ),
        loader: postParamHandler,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
