import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
        onClick={toggleTheme}
      className="p-2 rounded-full border border-slate-300 dark:border-slate-700 
      hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}