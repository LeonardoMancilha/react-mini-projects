import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      aria-label="Alternar entre tema branco e escuro"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;
