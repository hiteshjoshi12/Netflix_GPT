import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { logo } from "../Utils/Constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handelsignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({ uid: uid, email: email, displayName: displayName }
            
            )
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      // unsubscribe is called when component is unmounted
      return () =>unsubscribe();
    });
  }, []);
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        className="w-28 sm:w-44"
        src= {logo}
        alt="NETFLIX"
      />
      {user && (
        <div> 
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"onClick={handleGptSearchClick}>GPT Serach</button><button
          className="py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-md "
          onClick={handelsignout}
          >
          Sign Out
        </button>
          </div>
      )}
    </div>
  );
};

export default Header;
