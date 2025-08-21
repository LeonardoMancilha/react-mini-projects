import { MapPin } from "react-feather";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./UserCard.module.css";

function UserCard({ user, total_repos, theme }) {
  if (!user && !loading) return <p>Usuário não encontrado.</p>;

  const formattedDate = new Date(user.created_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const UserProfile = ({ user }) => {
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      const handleKeyPress = (event) => {
        const activeElement = document.activeElement;
  
        // ✅ Impede a ação se o foco estiver em um campo de entrada
        if (
          activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.isContentEditable
        ) {
          return;
        }
  
        if (event.key.toLowerCase() === "a" && user?.html_url && user?.login) {
          window.open(user.html_url, "_blank", "noopener,noreferrer");
          setMessage(`Redirecionando para o perfil de ${user.login}...`);
  
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      };
  
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, [user]); // Dependência direta do `user`, evitando acessar propriedades específicas
  
    return (
      <section>
        <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
          @{user?.login}
        </a>
        {message && <p className="feedback-message">{message}</p>}
      </section>
    );
  };

  if (!user) return <p>Usuário não encontrado.</p>;

  return (
    <article
      className={`${styles.user_card} ${theme === "dark" ? styles.dark : styles.light}`}
    >
      <figure>
        <img src={user.avatar_url} alt={user.login} />
      </figure>

      <section className={styles.profile_info}>
        <h2>{user.name || user.login}</h2>
        <UserProfile user={user} />
        <p>
          <strong>Conta criada em:</strong> {formattedDate}
        </p>
      </section>

      <p className={styles.description}>
        {user.bio || "Nenhuma biografia disponível"}
      </p>

      {user.location && (
        <p>
          <MapPin className={styles.location_icon} />
          <span>{user.location || "Não informado"}</span>
        </p>
      )}

      <section>
        <div>
          <span>🌐</span>
          {user.blog ? (
            <a href={user.blog} target="_blank" rel="noopener noreferrer">
              {user.blog}
            </a>
          ) : (
            <span> Não disponível</span>
          )}
        </div>
      </section>

      <section>
        <p>
          📂 Repositórios Públicos: <strong>{total_repos}</strong>
        </p>
      </section>

      <section>
        <span>🐦</span>
        {user.twitter_username ? (
          <a
            href={`https://twitter.com/${user.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{user.twitter_username}
          </a>
        ) : (
          <span> Não disponível</span>
        )}
      </section>

      <section>
        {user.email ? (
          <p>
            <strong>📧</strong> {user.email}
          </p>
        ) : (
          <p>
            <strong>📧</strong> Não disponível
          </p>
        )}
      </section>

      <section>
        <span>🏢</span>
        {user.company ? (
          <span> {user.company}</span>
        ) : (
          <span> Não disponível</span>
        )}
      </section>

      <p>
        <strong>Seguidores:</strong> {user.followers} |{" "}
        <strong>Seguindo:</strong> {user.following}
      </p>
      <p>
        <strong>Pull Requests Criados:</strong> {user.pull_requests || 0}
      </p>
      <section>
        {user.events && user.events.length > 0 ? (
          user.events
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 2)
            .map((event) => (
              <div key={event.id}>
                <p>
                  <strong>Tipo de Evento:</strong> {event.type}
                </p>
                <p>
                  <strong>Repositório:</strong> {event.repo.name}
                </p>
                <p>
                  <strong>Data:</strong>{" "}
                  {new Date(event.created_at).toLocaleString()}
                </p>
              </div>
            ))
        ) : (
          <p>Nenhuma atividade recente encontrada.</p>
        )}
      </section>
    </article>
  );
}

export default UserCard;
