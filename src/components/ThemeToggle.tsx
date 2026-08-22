import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check local storage or default to light
    const savedTheme = localStorage.getItem("tavryz-theme") as "light" | "dark" | null;
    if (savedTheme === "dark") {
      document.documentElement.classList.remove("light");
      setTheme("dark");
    } else {
      document.documentElement.classList.add("light");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      localStorage.setItem("tavryz-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("tavryz-theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center bg-transparent border border-white/[0.08] hover:border-[#10b981]/40 hover:bg-[#10b981]/5 transition-colors duration-200 text-[#a3a3a3] hover:text-white rounded-none cursor-pointer"
      title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-3.5 h-3.5 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
