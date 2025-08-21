import { useState } from "react";
import { Search } from "react-feather";
import styles from "./SearchForm.module.css";

function SearchForm({ onSearch, setSearchTerm, inputRef }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setSearchTerm(input); // Atualiza corretamente o estado de busca
      setInput(""); // Limpa o campo do formulário
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setSearchTerm(e.target.value); // Atualiza o termo de pesquisa
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <section className={styles.search_container}>
        <label className={styles.label} id="text-label">
          <Search
            className={styles.search_icon}
            aria-label="Pesquisar usuário"
          />
          <input
            ref={inputRef} // Ref para o campo de input
            className={styles.input}
            type="text"
            id="text"
            value={input}
            onChange={handleChange}
            placeholder="Digite o nome de usuário..."
            aria-labelledby="text-label"
            required
          />
        </label>
        <button type="submit">Buscar</button>
      </section>
    </form>
  );
}

export default SearchForm;
