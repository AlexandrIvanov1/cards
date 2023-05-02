import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/profile",
    element: <div>Profile</div>,
  },
  {
    path: "/cards",
    element: <div>Cards</div>,
  },
  {
    path: "/packs",
    element: <div>Packs</div>,
  },
  {
    path: "/learn",
    element: <div>Learn</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
  {
    path: "/check-email",
    element: <div>Check email</div>,
  },
  {
    path: "/set-new-password",
    element: <div>Set new password</div>,
  },
  {
    path: "/forgot-password",
    element: <div>Forgot password</div>,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
