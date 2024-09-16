import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apilogin } from "../services/apiregister/apilogin.js";
import toast from "react-hot-toast";
import { setToken } from "../services/token/token.js";

export default function Login () {

    const navigate=useNavigate();
     const [formdata,setFormdata]=useState({});

const handlechanges = (e) =>{
     setFormdata({...formdata,...{[e.target.name]:e.target.value}})
}





const handleSubmits = async(e) =>{
   e.preventDefault();
    var res = await apilogin(formdata);
    if (res.status==="login failed") {
        toast.error("invalid email or password");
        
    } 
    else if(res.status==="sucessfully login"){
         setToken(res.token);
         toast.success('login successfully')
         navigate('/');
    }
    else {
        console.log(error);
    }    
}



    return(
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
            Or
            <Link to="/register"className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                create a new acccount
            </Link>
        </p>
    </div>


    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmits}>
                <div>
                    <label for="email" className="block text-sm font-medium leading-5  text-gray-700">Email address</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input  name="email" placeholder="user@example.com" onChange={handlechanges} type="email" required=""  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label for="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password" onChange={handlechanges} required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember_me" name="remember" type="checkbox" value="1" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
                        <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
                    </div>

                    
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Sign in
            </button>
          </span>
                </div>
            </form>

        </div>
    </div>
</div>
    )
}