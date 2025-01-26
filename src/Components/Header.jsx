import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES, logo } from "../Utils/Constants";
import { changeLanguage } from "../Utils/ConfigSLice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    setIsMenuOpen(false); // Close menu after clicking
  };

  const handellanguagechange = (e) => {
    dispatch(changeLanguage(e.target.value));
    setIsMenuOpen(false); // Close menu after selecting a language
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="absolute w-full px-4 sm:px-6 md:px-8 lg:px-12 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center">
      <img className="w-20 sm:w-36 md:w-44 lg:w-48" src={logo} alt="NETFLIX" />

      {user && (
        <div className="flex items-center">
          {/* Hamburger Menu for Small Screens */}
          <div className="lg:hidden">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-3-line text-xl"></i>
            </button>

            {isMenuOpen && (
              <div className="absolute right-4 top-12 bg-black rounded-lg shadow-lg p-4 space-y-4">
                {showGptSearch && (
                  <select
                    className="p-2 bg-black rounded-lg text-white w-full"
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
                  className="block w-full py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700"
                  onClick={handleGptSearchClick}
                >
                  {showGptSearch ? "Homepage" : "GPT Search"}
                </button>
                <button
                  className="block w-full py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600"
                  onClick={() => {
                    handelsignout();
                    setIsMenuOpen(false); // Close menu after signing out
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Normal Layout for Medium and Larger Screens */}
          <div className="hidden lg:flex items-center space-x-4">
            {showGptSearch && (
              <select
                className="p-2 bg-black rounded-lg text-white"
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
              className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <button
              className="py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600"
              onClick={handelsignout}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
