import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 
        transition-colors border-2 border-pink-500 dark:border-[#00FF00] relative"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-pink-500 absolute top-0 left-0" />
        <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#00FF00] absolute top-0 left-0" />
      </div>
    </button>
  );
}