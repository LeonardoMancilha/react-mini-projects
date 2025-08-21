export const fetchGitHubUser = async (username) => {
  try {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
    );
    const userData = await userResponse.json();

    if (!userResponse.ok) {
      throw new Error("Usuário não encontrado");
    }

    // Buscar todos os repositórios paginados
    let repos = [];
    let page = 1;
    let perPage = 100; // Máximo permitido pela API

    while (true) {
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`,
      );
      const data = await reposResponse.json();

      if (data.length === 0) break; // Para quando não houver mais repositórios

      repos = repos.concat(data);
      page++;
    }

    // Buscar eventos públicos
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public`,
    );
    const eventsData = await eventsResponse.json();

    // Filtrar pull requests
    const pullRequests = eventsData.filter(
      (event) => event.type === "PullRequestEvent",
    );

    return {
      user: userData,
      repos: repos,
      events: eventsData,
      total_repos: repos.length,
      pull_requests: pullRequests.length,
    };
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error.message);
    throw error;
  }
};
