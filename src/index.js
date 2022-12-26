import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import DetailPost from "./pages/DetailPost";
import Index from "./pages/Index";
import ErrorElement from "./pages/ErrorElement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      { path: "post/add", element: <AddPost /> },
      { path: "post/:id/edit", element: <EditPost /> },
      {
        path: "post/:id",
        element: <DetailPost />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "please make sure to insert correct id",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
