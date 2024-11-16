import {   createBrowserRouter } from "react-router-dom";
import Main from "./LeOut/Main";
import Home from "./Componet/Home/Home";
import Login from "./Componet/Pajes/logineAndRejestar/Login";
import Rejestar from "./Componet/Pajes/logineAndRejestar/Rejestar";
import Deshboard from "./Componet/Pajes/Deshboard/Deshboard";
import ProductAdd from "./Componet/Pajes/Deshboard/ProductAdd/DeshboardPages/ProductAdd";
import MyProduct from "./Componet/Pajes/Deshboard/ProductAdd/DeshboardPages/MyProduct/MyProduct";
import OverviewProduct from "./Componet/Pajes/Deshboard/ProductAdd/DeshboardPages/OverviewProduct/OverviewProduct";


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
    },
    {
      path:'/desbord',
      element:<Deshboard></Deshboard>,
      children:[
        {
          path:'addprodak',
          element: <ProductAdd></ProductAdd>
        },
        {
          path:'myProduct',
          element:<MyProduct></MyProduct>
        },
        {
          path:'OverviewProduct',
          element:<OverviewProduct></OverviewProduct>
        }
      ]
    }

  ]);