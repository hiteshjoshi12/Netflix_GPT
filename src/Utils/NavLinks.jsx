import { useSelector } from "react-redux";

const NavLinks = ({ onGptClick, onSignOut }) => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <button
        className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700"
        onClick={onGptClick}
      >
        {showGptSearch ? "Homepage" : "GPT Search"}
      </button>
      <button
        className="py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default NavLinks;
