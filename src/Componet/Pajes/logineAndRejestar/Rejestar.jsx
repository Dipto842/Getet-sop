import { useForm } from 'react-hook-form';

import { useContext } from 'react';
import { Authcontes } from '../../../firebase/Authentication';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import Goole from './GoogleLogine/Goole';

const Rejestar = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm();
      const {singup}=useContext(Authcontes) 
     
      const onSubmit =(data)=>{
        const email = data.email
        const password = data.password
        console.log(singup);
        singup(email,password)
        .then((res)=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              neveget('/')
        })
        

   

      }
      const neveget = useNavigate()
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold ">Sign Up now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-xl gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name')} type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register('password')} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
       
      </form>
      <div className=' text-center  '>
      <div className="divider">OR</div>
    <Goole ></Goole>
      </div>
      <div>
        <h1>Have an account <Link to={'/login'}><span className='text-blue-800'>Login</span></Link></h1>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Rejestar;