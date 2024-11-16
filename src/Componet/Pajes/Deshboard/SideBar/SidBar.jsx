import { NavLink } from "react-router-dom";


const SidBar = () => {
    return (
        <div>
              <div>
        <ul className="flex flex-col gap-3">
     <NavLink to={'OverviewProduct'}><li className=" border-2  btn-outline h-10 font-bold text-[18px] pt-1 ">Overview Product </li></NavLink>
     <NavLink to={'myProduct'}><li className=" border-2  btn-outline  h-10 font-bold text-[18px] pt-1 ">my Product</li></NavLink>
     <NavLink to={'addprodak'}><li className=" border-2  btn-outline   h-10 font-bold text-[18px] pt-1">Product Add</li></NavLink>
    
        </ul>
      
       
      </div>
        </div>
    );
};

export default SidBar;