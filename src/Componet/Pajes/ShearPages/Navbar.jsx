import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontes } from "../../../firebase/Authentication";
import auth from "../../../firebase/Firebase";
import { signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const {user}=useContext(Authcontes)
  const logout = ()=>{
    signOut(auth)
    .then((res)=>{
      console.log(res);
      
    })
  }
const naveLing =<div className="flex  gap-6 items-center text-[17px] font-medium italic ">
<Link to={'/'}><li className=" text-white border-2 w-20 text-center rounded-xl h-10 pt-[6px]   hover:bg-green-800   active:bg-green-700   focus:outline-none focus:ring focus:ring-green-300     shadow-lg shadow-purple-500/50 ">Home</li></Link>

<Link><li className="text-white border-2 w-20 text-center rounded-xl h-10 pt-[6px]   hover:bg-green-300   active:bg-green-700   focus:outline-none focus:ring focus:ring-green-300     shadow-md ">Product</li></Link>
<Link><li className="text-white border-2 w-20 text-center rounded-xl h-10 pt-[6px]   hover:bg-green-300   active:bg-green-700   focus:outline-none focus:ring focus:ring-green-300     shadow-md ">About</li></Link>
<Link><li className="text-white border-2 w-20 text-center rounded-xl h-10 pt-[6px]   hover:bg-green-300   active:bg-green-700   focus:outline-none focus:ring focus:ring-green-300     shadow-md ">Contact</li></Link>
</div>
    return (
        <div>
   <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {naveLing}
      </ul>
    </div>
    <div className=" text-3xl font-bold pb-[6px] italic bg-gradient-to-r text-transparent bg-clip-text  inline-block  from-purple-800  via-orange-500  to-yellow-500 ">Gadget Shop</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {naveLing}
    </ul>
  </div>
 
  <div className="navbar-end ">
   { !user &&  <div className="pr-28 ">
      <Link to={'/login'} ><li  className= " list-none text-white border-2 w-20 text-center rounded-xl h-10 pt-[6px]   hover:bg-green-300   active:bg-green-700   focus:outline-none focus:ring focus:ring-green-300     shadow-md " >Sign in</li> </Link>
      
    </div>
   }
  <div className="dropdown dropdown-end pr-6">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt='No picar'
            src= {  user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-4 text-center ">
    <Link>   <li className="text-white border-2 w-20 text-center rounded-xl h-10 pt-[6px]    hover:bg-green-300   active:bg-green-700   focus:outline-none focus:ring focus:ring-green-300  mx-7   shadow-md ">Deshboard</li></Link>
      <Link> <li  onClick={logout} className="text-white border-2 w-20 text-center rounded-xl h-10 pt-[6px]   hover:bg-green-300   active:bg-green-700   focus:outline-none focus:ring focus:ring-green-300   mx-7   shadow-md ">Logout </li></Link>
          
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;