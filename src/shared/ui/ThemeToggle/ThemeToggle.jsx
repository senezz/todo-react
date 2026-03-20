import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      className={`${styles.toggle} ${isDark ? styles.isDark : ""}`}
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      type="button"
    >
      <span className={styles.icon} aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeToggle;
