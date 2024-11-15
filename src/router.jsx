import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "./LeOut/Main";
import Home from "./Componet/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);