import React, { useRef, useState } from "react";
import { checkvalidatedata } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import {banner} from "../Utils/Constants"
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
      <div className="absolute w-full min-h-screen">
        <img
          src={banner}
          alt="NETFLIX"
          className="w-full h-full object-cover fixed"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-80 md:w-[40%] absolute p-4 sm:p-8 bg-black my-24 sm:my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isloginform ? "Sign In" : "Sign Up"}
        </h1>
        {!isloginform && (
          <div className="flex gap-2">
            
            <input
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-[#333333] rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-[#333333] rounded-md"
            />
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          autoComplete="username"
          value={isloginform ? "demo@gmail.com" : ""} 
          className="p-4 my-4 w-full bg-[#333333] rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={isloginform ? "Hiteshjoshi1@" : ""} 
          className="p-4 my-4 w-full bg-[#333333] rounded-md"
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
