import { Outlet } from "react-router-dom";
import Navbar from "../Componet/Pajes/ShearPages/Navbar";
import Footer from "../Componet/Pajes/ShearPages/Footer/Footer";





const Main = () => {
    return (
        <div>
        <div>
        <Navbar></Navbar>
        </div>
        
       <div className="min-h-screen">
       <Outlet />
       </div>
    <div>  <Footer></Footer></div>
        </div>
    );
};

export default Main;