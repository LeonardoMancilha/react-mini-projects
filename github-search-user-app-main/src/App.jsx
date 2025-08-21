import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import ThemeToggle from "./components/ThemeToggle";
import StatusMessage from "./../src/assets/hooks/StatusMessage";
import { useTheme } from "./../src/assets/hooks/useTheme";
import { useGitHubUser } from "./../src/assets/hooks/useGitHubUser";
import "./styles/App.css";

function App() {
  const { theme, setTheme, message } = useTheme();
  const {
    user,
    totalRepos,
    events,
    loading,
    error,
    handleSearch,
    setSearchTerm,
  } = useGitHubUser();

  return (
    <div className={`app ${theme}`}>
      <section className="header_section">
        <h1>GitHub User Search</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </section>

      <SearchForm onSearch={handleSearch} setSearchTerm={setSearchTerm} />
      <StatusMessage loading={loading} error={error} message={message} />
      {user && (
        <UserCard
          user={user}
          total_repos={totalRepos}
          events={events}
          theme={theme}
        />
      )}
    </div>
  );
}

export default App;
