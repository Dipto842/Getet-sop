import { Outlet } from "react-router-dom";
import Navbar from "../Componet/Pajes/ShearPages/Navbar";





const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
        
         <Outlet />
      
        </div>
    );
};

export default Main;