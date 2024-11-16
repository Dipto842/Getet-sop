
import './index.css'
import ReactDOM from 'react-dom/client'
import { router } from './router.jsx'
import { RouterProvider,} from "react-router-dom";
import Authprovedar from './firebase/Authentication.jsx';
import React from 'react';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Authprovedar>
   <RouterProvider router={router} />
   </Authprovedar>
  </React.StrictMode>
)
