import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { logo } from "../Utils/Constants";
import useAuthHandler from "../Hooks/useAuthHandler";
import NavLinks from "../Utils/NavLinks";
import MobileMenu from "../Utils/MobileMenu";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const { handleSignOut } = useAuthHandler();

  const location = useLocation();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full px-4 sm:px-6 md:px-8 lg:px-12 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center">
      
      {user  ? (
        <Link to="/browse">
          <img
            className="w-20 sm:w-36 md:w-44 lg:w-48 cursor-pointer"
            src={logo}
            alt="NETFLIX"
          />
        </Link>
      ) : (
        <Link to="/">
          <img
            className="w-20 sm:w-36 md:w-44 lg:w-48 cursor-pointer"
            src={logo}
            alt="NETFLIX"
          />
        </Link>
      )}



      {location.pathname === "/" ? (
        <Link
          to="/login"
          className="bg-red-700 px-5 py-1 text-white rounded-sm"
        >
          Sign In
        </Link>
      ) : null}

      {user && showGptSearch === false ?(
        <div className="gap-6 ml-4 text-white text-sm hidden md:flex">
          <Link to="/browse" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/TvShow" className="hover:text-gray-400">
            TV Show
          </Link>
          <Link to="/Movies" className="hover:text-gray-400">
            Movies
          </Link>
          <Link to="/NewsAndpopular" className="hover:text-gray-400">
            New & Popular
          </Link>
        </div>
      ) : null}

      {user && (
        <div className="flex items-center">
          {/* Mobile Menu */}
          <MobileMenu
            onGptClick={handleGptSearchClick}
            onSignOut={handleSignOut}
          />

          {/* Normal Nav Links */}
          <NavLinks
            onGptClick={handleGptSearchClick}
            onSignOut={handleSignOut}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
