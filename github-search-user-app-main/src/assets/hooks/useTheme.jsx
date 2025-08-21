import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.target.tagName === "INPUT"
      )
        return;

      if (event.key.toLowerCase() === "d") {
        setTheme("dark");
        setMessage("Modo escuro ativado! 🌙");
      } else if (event.key.toLowerCase() === "l") {
        setTheme("light");
        setMessage("Modo claro ativado! ☀️");
      }

      setTimeout(() => setMessage(""), 2000);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return { theme, setTheme, message };
}
