import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import ListedBook from "./Pages/ListedBook/ListedBook";
import PageToRead from "./Pages/PageToRead/PageToRead";
import BookDetail from "./Components/BookDetail/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listed-book",
        element: <ListedBook></ListedBook>,
      },
      {
        path: "/Page-to-read",
        element: <PageToRead></PageToRead>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
