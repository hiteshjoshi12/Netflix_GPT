import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issigninform, Setsigninform] = useState(true);
  const togglesignin = () => {
    Setsigninform(!issigninform);


  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt="NETFLIX" className="h-full"
        />
      </div>
      <form className=" w-2/5 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="  font-bold text-3xl py-4">{issigninform ? "Sign In" : "Sign Up"}</h1>
        <div className="flex gap-2">
        {!issigninform && 
            <input
            type="text"
            placeholder="First Name"
            className="p-4 my-4 w-full bg-[#333333]"
            />
        }
        {!issigninform && 
            <input
            type="text"
            placeholder="Last Name"
            className="p-4 my-4 w-full bg-[#333333]"
            />
        }
        </div>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#333333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#333333]"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
        {issigninform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togglesignin}>
        {issigninform ? "New to Netflix? Sign Up Now" : "Email Already Register. Please Sign In"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
