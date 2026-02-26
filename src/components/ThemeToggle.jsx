import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi2";
import "./navbar.css"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <HiMoon /> : <HiSun />}
    </button>
  );
};

export default ThemeToggle;
