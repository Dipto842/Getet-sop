import { useForm } from 'react-hook-form';

import { useContext } from 'react';
import { Authcontes } from '../../../firebase/Authentication';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
 
    
    const {
        register,
        handleSubmit,
        // formState: { errors },
      } = useForm();
      const {singIn}=useContext(Authcontes) 
     
      const onSubmit =(data)=>{
        const email = data.email
        const password = data.password
        console.log(singIn);
        singIn(email,password)
        .then((res)=>{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Login success",
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
      <h1 className="text-5xl font-bold ">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full lg:w-[500px] shadow-2xl bg-base-100 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-xl gap-4">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>
        <h1>Don't have an account? <Link to={'/rejestar'}><span className='text-blue-800'>Sign Up</span></Link></h1>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;