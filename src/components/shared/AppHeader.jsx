import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import MLLogo from "./MLLogo";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  useThemeSwitcher();

  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 640) {
      setShowMenu(false);
    }
  });

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  const navigate = useNavigate();

  const handleNav = (section) => {
    const path = window.location.pathname;
    if (path === "/") {
      // Already on homepage — manually scroll
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/#${section}`);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div id="imageLogo">
            <Link to="/">
              <MLLogo />
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <a
            onClick={() => handleNav("aboutMeSection")}
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark cursor-pointer"
            aria-label="About Me"
          >
            About Me
          </a>
          <a
            onClick={() => handleNav("projectsSection")}
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Projects"
          >
            Projects
          </a>

          <a
            onClick={() => handleNav("contactSection")}
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark cursor-pointer"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          {/* <a
            onClick={() => handleNav("aboutMeSection")}
            className="block text-left text-3xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="About Me"
          >
            About Me
          </a> */}
          <a
            onClick={() => handleNav("projectsSection")}
            className="block text-left text-3xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Projects"
          >
            Projects
          </a>

          <a
            onClick={() => handleNav("contactSection")}
            className="block text-left text-3xl text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>

        {/* Spacer to balance the logo on the left for centered nav links */}
        <div className="hidden sm:block" style={{ width: "70px" }}></div>
      </div>
    </motion.nav>
  );
};

export default AppHeader;
