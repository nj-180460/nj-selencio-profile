"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference on mount
    const savedTheme = localStorage.getItem("profileTheme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("profileTheme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("profileTheme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="flex gap-2 no-print">
      <button 
        onClick={toggle} 
        className="p-2 rounded-full bg-zinc-800 dark:bg-white/10 hover:scale-110 border border-white/20 cursor-pointer transition-all flex items-center justify-center w-10 h-10"
        aria-label="Toggle Theme"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
      <button 
        onClick={() => window.print()} 
        className="px-4 py-1.5 bg-white text-black rounded-full text-xs font-bold hover:bg-zinc-200 cursor-pointer border border-zinc-300"
      >
        PRINT PDF
      </button>
    </div>
  );
}