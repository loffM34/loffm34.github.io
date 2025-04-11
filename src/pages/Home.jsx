import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import AboutMeBio from "../components/about/AboutMeBio";
import { AboutMeProvider } from "../context/AboutMeContext";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import ContactDetails from "../components/contact/ContactDetails";

import { motion } from "framer-motion";
import About from "./AboutMe";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);
  return (
    <div className="container mx-auto">
      <div className="w-full min-h-screen flex justify-center items-center mobile px-4">
        <AppBanner></AppBanner>
      </div>

      <AboutMeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="w-100 mw-100 m-0 p-0"
        >
          <AboutMeBio />
        </motion.div>
      </AboutMeProvider>

      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>

      {/* More Projects Button */}
      {/* <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
