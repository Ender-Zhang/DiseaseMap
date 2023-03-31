/*
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-03-30 15:32:51
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-03-31 00:30:31
 * @FilePath: \DiseaseMap\diseasemap\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// // import "./index.css";

import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Test from "./routes/test";
import Login from "./routes/login";
import Map from "./routes/map";
import Detail from "./routes/detial";
import loader from "./routes/detial";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/test",
//     element: <Test />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/map",
//     element: <Map />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/detail:id",
//     element: <Detail />,
//     errorElement: <ErrorPage />,
//     // loader: loader,
//   },

// ]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
    
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

