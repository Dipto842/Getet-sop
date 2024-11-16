import { useContext } from "react";
import { Authcontes } from "../../../../firebase/Authentication";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Goole = () => {
    const {signInWithPopu}= useContext(Authcontes)
    const hedelsubmit = ()=>{
        signInWithPopu()
      .then(()=>{
        
        neveget('/')
      })
    }
    const neveget = useNavigate()
    return (
        <div className="flex">
           <button onClick={hedelsubmit} className="flex items-center gap-4 btn btn-md rounded-lg  text-center mx-auto"> Sign Up   <span> <FaGoogle/></span></button>
        </div>
    );
};

export default Goole;