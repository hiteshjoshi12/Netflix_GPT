import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

const MobileMenu = ({ onGptClick, onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden relative">
      <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
        <i className="ri-menu-3-line text-xl"></i>
      </button>

      {isOpen && (
        <div className="absolute right-4 top-12 bg-black rounded-lg shadow-lg p-4 space-y-4">
          <LanguageSelector onClose={() => setIsOpen(false)} />
          <button
            className="block w-full py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700"
            onClick={() => {
              onGptClick();
              setIsOpen(false);
            }}
          >
            GPT Search
          </button>
          <button
            className="block w-full py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-600"
            onClick={() => {
              onSignOut();
              setIsOpen(false);
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
