import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidatedata } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isloginform, setisloginform] = useState(true);
  const [errormsg, seterrmsg] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const togglesignin = () => {
    setisloginform(!isloginform);
  };

  const handelbuttonclick = () => {
    // validate the form data
    const msg = checkvalidatedata(email.current.value, password.current.value);
    seterrmsg(msg);
    if (msg) return;

    if (!isloginform) {
      //sign up login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmsg(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header/>
      <div className="absolute w-full min-h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt="NETFLIX"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" sm:w-2/3 md:w-1/2 lg:w-1/3 xl: w-2/5 absolute p-4 sm:p-8 bg-black my-24 sm:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isloginform ? "Sign In" : "Sign Up"}
        </h1>
        {!isloginform && (
          <div className="flex gap-2">
            
            <input
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-[#333333]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-[#333333]"
            />
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          autoComplete="username"
          className="p-4 my-4 w-full bg-[#333333]"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="p-4 my-4 w-full bg-[#333333]"
        />
        <p className="text-red-700">{errormsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handelbuttonclick}
        >
          {isloginform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togglesignin}>
          {isloginform
            ? "New to Netflix? Sign Up Now"
            : "Email Already Register. Please Sign In"}
        </p>
      </form>
      
    </div>
  );
};

export default Login;
