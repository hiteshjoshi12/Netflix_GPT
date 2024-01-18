import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES, logo } from "../Utils/Constants";
import { changeLanguage } from "../Utils/ConfigSLice";

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      // unsubscribe is called when component is unmounted
      return () => unsubscribe();
    });
  }, []);
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  const handellanguagechange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-28 sm:w-44" src={logo} alt="NETFLIX" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 bg-black rounded-lg m-2 text-white"
              onChange={handellanguagechange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ?"HomePage": "GPT Serach"}
          </button>
          <button
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
