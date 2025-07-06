import { useState, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navRef = useRef(null);

  const handleLanguageChange = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const navItems = useMemo(
    () => [
      { id: 1, name: t("nav.home"), href: "/" },
      { id: 2, name: t("nav.about"), href: "/about" },
      {
        id: 3,
        name: t("nav.services"),
        href: "#",
        dropdown: [
          { name: t("nav.services_web"), href: "/services/web" },
          { name: t("nav.services_mobile"), href: "/services/mobile" },
          { name: t("nav.services_design"), href: "/services/design" },
        ],
      },
      { id: 4, name: t("nav.pricing"), href: "/pricing" },
      { id: 5, name: t("nav.contact"), href: "/contact" },
    ],
    [t],
  );

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            {/* Use an image for the logo */}
            <Link to="/" className="flex flex-shrink-0 items-center">
              <img
                className="h-32 w-auto"
                src="/images/logo.png"
                alt={t("logo")}
              />
            </Link>
          </div>

          <div ref={navRef} className="hidden items-center space-x-4 md:flex">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {!item.dropdown ? (
                  <Link
                    to={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    >
                      {item.name}
                      <FiChevronDown
                        className={`ms-1 transition-transform ${
                          dropdownOpen === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen === item.id && (
                      <div className="ring-opacity-5 absolute start-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black dark:bg-gray-800">
                        <div className="py-1">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center md:flex">
            <button
              onClick={handleLanguageChange}
              className="w-24 rounded-md bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 focus:outline-none"
              aria-label="Toggle Language"
            >
              {i18n.language === "en"
                ? t("language.arabic")
                : t("language.english")}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-gray-700 hover:text-indigo-600 focus:outline-none dark:text-gray-300 dark:hover:text-indigo-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-white shadow-lg md:hidden dark:bg-gray-900">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <div key={item.id}>
                {!item.dropdown ? (
                  <Link
                    to={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                    >
                      {item.name}
                      <FiChevronDown
                        className={`transition-transform ${
                          dropdownOpen === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen === item.id && (
                      <div className="ps-4">
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200 px-2 pt-3 pb-2 dark:border-gray-700">
              <button
                onClick={handleLanguageChange}
                className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-bold text-white hover:bg-indigo-700"
                aria-label="Toggle Language"
              >
                {i18n.language === "en"
                  ? t("language.arabic")
                  : t("language.english")}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
