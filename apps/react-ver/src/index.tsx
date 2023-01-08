import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./views/landing-page";
import Registration from "./views/registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    loader: undefined,
    children: [],
  },
  { path: "/register", element: <Registration />, loader: undefined },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
