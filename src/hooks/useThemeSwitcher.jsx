import { useEffect } from "react";

const useThemeSwitcher = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return ["dark", () => {}];
};

export default useThemeSwitcher;
