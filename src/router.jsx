import {   createBrowserRouter } from "react-router-dom";
import Main from "./LeOut/Main";
import Home from "./Componet/Home/Home";
import Login from "./Componet/Pajes/logineAndRejestar/Login";
import Rejestar from "./Componet/Pajes/logineAndRejestar/Rejestar";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
      
      ]
    },
    {
      path:'/login',
      element:<Login></Login>,
    },
    {
      path:'/rejestar',
      element:<Rejestar></Rejestar>
    }
  ]);