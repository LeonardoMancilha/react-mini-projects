# GitHub Search User App

Este projeto é uma aplicação web desenvolvida inicialmente como parte de um desafio do Frontend Mentor. O objetivo era criar uma interface simples para buscar e visualizar informações sobre perfis de usuários do GitHub. Durante o desenvolvimento, fiz algumas alterações e adições de funcionalidades, como a implementação de um tema escuro e claro, animações e atalhos de teclado, para melhorar a experiência do usuário.

Agora, você pode pesquisar facilmente um usuário no GitHub e acessar informações como repositórios, seguidores e atividades recentes diretamente na interface do aplicativo.

![Captura de tela 2025-02-14 183228](https://github.com/user-attachments/assets/780190b1-55f9-492b-a285-f6e647cfea7c)

![Captura de tela 2025-02-14 192712](https://github.com/user-attachments/assets/035c614f-e4ff-4aea-8cdf-70c2d7888b44)

## Funcionalidades Principais

- Pesquisa de Perfil GitHub: Pesquise por um usuário no GitHub e visualize informações detalhadas, como repositórios, seguidores e atividades.
- Tema Escuro e Claro: Altere entre os temas de forma intuitiva com um clique ou usando os atalhos de teclado D para o tema escuro e L para o tema claro.
- Exibição de informações: Veja o nome do usuário, número de repositórios públicos, seguidores, pull requests criados e muito mais.

Além das funcionalidades principais do GitHub User Search App, implementei algumas melhorias que oferecem uma experiência de usuário ainda mais completa e interativa:

- Exibição do número de pull requests criados pelo usuário 🛠️
- Indicação de atividade recente: mostra se o usuário fez ou não alguma ação recentemente 📊

- Teclas de atalho para facilitar a navegação:
    - A: Encaminha o usuário para o perfil do GitHub da pessoa pesquisada 🔗
    - D: Exibe o conteúdo do site com fundo preto 🖤
    - L: Exibe o conteúdo do site com fundo branco ⚪
    
- Botão Enter: Permite realizar a pesquisa diretamente pressionando a tecla Enter ⏎
- Carregamento visível: A mensagem "Carregando..." aparece enquanto a API traz os resultados, garantindo uma experiência mais fluida ⏳
- Mensagens de feedback de tema: Exibe as mensagens "Modo claro ativado" e "Modo escuro ativado" quando o usuário alterna entre os modos de visualização 💡🌙
- Animação Suave: Transições suaves entre os temas claro e escuro, proporcionando uma experiência mais agradável ao usuário.

## Performance e Qualidade

O aplicativo foi otimizado para garantir uma experiência rápida, acessível e com boas práticas de desenvolvimento. Durante a análise do **Lighthouse**, as seguintes pontuações foram obtidas:

- **Performance: 100** – O site foi otimizado para garantir um desempenho excelente, com tempo de carregamento rápido e baixo consumo de recursos.
- **Acessibilidade: 100** – A aplicação foi projetada com foco na acessibilidade, garantindo que todos os usuários possam navegar de forma eficiente, inclusive aqueles com necessidades especiais.
- **Melhores Práticas: 100** – O projeto segue as melhores práticas de desenvolvimento, com foco em segurança, confiabilidade e manutenção de código.
- **SEO: 100** – A otimização para motores de busca foi feita de forma eficaz, o que garante uma melhor visibilidade do site nos resultados de pesquisa.

Essas pontuações indicam que a aplicação não apenas oferece uma excelente experiência para o usuário, mas também é acessível e bem otimizada para os motores de busca e para boas práticas de desenvolvimento.

# Desafio Original

Este projeto foi inspirado em um desafio do <a href="https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6" target="_blank">Frontend Mentor</a>, onde o objetivo era criar uma aplicação para exibir detalhes de um perfil de usuário do GitHub. No entanto, decidi ir além e adicionar recursos como:

- Alternância de temas (escuro/claro) com animações;
- Implementação de atalhos de teclado para facilitar a navegação;
- Exibição de um feedback de carregamento enquanto as informações são recuperadas.

# Tecnologias Usadas

- React: Para a construção da interface de usuário.
- React Hooks: Para gerenciamento de estado e efeitos colaterais.
- CSS Puro: Para estilização da aplicação.
- GitHub API: Para buscar as informações do usuário do GitHub.
- React Router: Para navegação de rotas (caso haja múltiplas páginas).

# Como Rodar o Projeto

## 1. Clone o Repositório
```bash
git clone https://github.com/LeonardoMancilha/github-user-profile-search.git
cd github-user-profile-search
```

## 2. Instale as Dependências
```bash
npm install
```

## 3. Rode o Projeto
```bash
npm start
```
Isso irá rodar o projeto localmente em http://localhost:3000.

# Como Contribuir
1. Fork este repositório.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Faça suas alterações.
4. Commit suas alterações (git commit -am 'Adiciona nova funcionalidade').
5. Push para a branch (git push origin feature/nova-feature).
6. Abra um Pull Request.

# Licença
Este projeto está licenciado sob a Licença MIT.

# Agradecimentos
Agradecemos ao GitHub pela API que torna possível a busca por perfis de usuários de forma simples e eficiente.

