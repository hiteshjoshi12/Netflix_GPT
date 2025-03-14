import { useDispatch } from "react-redux";
import { changeLanguage } from "./ConfigSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/Constants";

const LanguageSelector = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    onClose();
  };

  return (
    <select
      className="p-2 bg-black rounded-lg text-white w-full"
      onChange={handleLanguageChange}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
