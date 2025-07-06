import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// 1. Make sure you have your flag images in the /public/flags folder
const languages = [
  { code: "en", name: "EN", flag: "/flags/us.png" },
  { code: "ar", name: "AR", flag: "/flags/sa.png" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Set the initial selected language based on the current i18n language
  const [selected, setSelected] = useState(
    languages.find((lang) => lang.code === i18n.language) || languages[0],
  );

  const menuRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(lang.code); // Change the language
    document.documentElement.dir = lang.code === "ar" ? "rtl" : "ltr"; // 2. Change document direction
    setIsOpen(false);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. Update direction when the component mounts based on the initial language
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="relative z-50 inline-block text-left" ref={menuRef}>
      {/* --- Selected Language Button --- */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-gray-700"
      >
        <img
          src={selected.flag}
          alt={selected.name}
          className="h-5 w-5 rounded-full object-cover"
        />
        <span className="text-sm font-medium text-white">{selected.name}</span>
        <svg
          className={`h-4 w-4 text-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* --- Dropdown Menu --- */}
      {isOpen && (
        <ul className="ring-opacity-5 absolute end-0 mt-2 w-40 origin-top-right rounded-md bg-[#2c2f33] shadow-lg ring-1 ring-black">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex cursor-pointer items-center gap-3 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span>{lang.name === "AR" ? "العربية" : "English"}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
