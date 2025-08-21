import { useState, useEffect, useRef } from "react";

export function useGitHubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null); // Referência para o campo de input

  const handleSearch = async (username) => {
    setUser(null); // Limpa os dados do usuário anterior antes de buscar
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Usuário não encontrado");

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
      setUser(null); // Se der erro, mantém os dados limpos
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, handleSearch, searchTerm, setSearchTerm, inputRef };
}
