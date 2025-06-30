'use client';

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const darkMode = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <button onClick={toggleTheme} className="hover:opacity-70 transition">
      <img
        src={isDark ? "/icons/light.svg" : "/icons/dark.svg"}
        alt="Toggle Theme"
        className="w-7 h-7"
      />
    </button>
  );
}
