import {  Link, Outlet } from "react-router-dom";
import SidBar from "./SideBar/SidBar";

const Deshboard = () => {
  const lingHome =<div>
    <ul>
     <Link to={'/'}> <li className="  h-10 font-bold text-[18px] pt-1 border-2  btn-outline ">Home</li></Link>
    </ul>
  </div>
  return (
    <div className="grid grid-cols-12">
     <div className="bg-slate-400 col-span-2 pt-4 pl-2 pr-2 text-center  min-h-screen"> 
      <SidBar></SidBar>
      <div className="divider">OR</div> 
          {lingHome}

        </div>

      <div className="w-2/3 col-span-10 ml-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshboard;
