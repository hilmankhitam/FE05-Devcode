import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// uncomment this code
import Hello from "./routes/hello";
import Home from "./routes/home";
import ContactManager from "./routes/contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  // uncomment this code to create routing to hello page
  {
    path: "/hello",
    element: <Hello />,
  },
  {
    path: "/contacts",
    element: <ContactManager />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} className="app" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
