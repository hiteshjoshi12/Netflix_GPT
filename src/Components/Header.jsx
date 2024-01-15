import React from "react";
import {signOut } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handelsignout = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    
    <div className="absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-28 sm:w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="NETFLIX" />
      { user && (

        
        <button className="w-24 bg-red-700 text-xl h-12 text-white rounded-md mt-4" onClick={handelsignout}>Sign Out</button>
        
      )}
      
    </div>
  );
};

export default Header;
