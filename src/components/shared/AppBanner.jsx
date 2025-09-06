import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import surfSoccerDev from "../../images/surfSoccerDev.png";
import { FiArrowDownCircle, FiEye, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
const AppBanner = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col justify-center max-w-2xl items-center mobile sm:flex-row mt-12 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        >
          Hi, I am Michael
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className=" font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          Software Engineer
          <p className="flex items-center align-ven gap-2 text-md max-w-xl mb-4 text-ternary-dark dark:text-ternary-light">
            <FiMapPin className="text-lg" />
            <span>Hoboken, NJ</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex sm:justify-center"
        >
          <a
            download="MichaelLoffResume.pdf"
            href="/files/MichaelLoff.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 duration-100"></FiArrowDownCircle>
            <p className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </p>
          </a>
          <a
            href="/files/MichaelLoff.pdf"
            target="blank"
            className="font-general-medium flex justify-center items-center max-w-sm sm:w-24 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiEye className="h-5 w-10 sm:w-6 sm:h-6 duration-100" />
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex justify-center max-w-xl ml-24 items-center"
      >
        <img
          src={activeTheme === "dark" ? surfSoccerDev : surfSoccerDev}
          alt="Developer"
          className="max-w-full h-auto rounded-xl shadow-md"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
