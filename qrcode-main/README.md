# 🚀 QR Code Generator

Gere QR Codes facilmente a partir de URLs. Simples, rápido, validado, testado e com foco em usabilidade e performance.

![QR Code Generator Preview](https://github.com/user-attachments/assets/8b5a3f1b-55b5-4f35-b446-0fd2f9b0f214)

## 📚 Sobre o projeto

Este é um projeto de gerador de QR Codes construído com **React**. A ideia foi criar um projeto do mundo real indo além de simples clones de componentes ou páginas estáticas para adicionar ao meu portfólio e demonstrar domínio de:

- React com componentes reutilizáveis
- CSS modular com variáveis e responsividade
- Validação de URL antes da geração
- Geração de QR Code com a biblioteca `qrcode`
- Testes automatizados com Jest
- Boas práticas de acessibilidade, usabilidade e SEO

## ⚙️ Funcionalidades

- [x] Entrada de URL com validação
- [x] Geração de QR Code com customização de cor e tamanho
- [x] Exibição do QR Code gerado
- [x] Download do QR Code em formato PNG
- [x] Botão desativado durante geração (estado de loading)
- [x] Feedback de erro se a URL for inválida
- [x] Testes com Jest para funções principais
- [x] Estilo limpo e responsivo com CSS modular
- [x] SEO com meta tags e título personalizado

## 🧪 Testes

Escrevi testes unitários com **Jest** para as funções principais:

- `isValidURL`: garante que apenas URLs válidas sejam aceitas.
- `generateQrCode`: garante que o QR Code é gerado corretamente e trata erros.

![Testes](https://github.com/user-attachments/assets/b1d14ecd-baed-4f6f-b191-f50725a33632)

## 📊 Desempenho no Lighthouse

Este projeto obteve **100/100** em todos os critérios avaliados pelo Lighthouse:

- ✅ Performance: 100
- ✅ Acessibilidade: 100
- ✅ Melhores práticas: 100
- ✅ SEO: 100

![LightHouse](https://github.com/user-attachments/assets/b742861e-8c5a-4e0f-8f9d-727270433710)

Esses resultados reforçam o cuidado com usabilidade, velocidade e boas práticas de desenvolvimento web.

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- React
- Vite
- CSS Modules
- Jest
- QRCode (npm)

## 📦 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/qrcode

# Acesse a pasta
cd qrcode

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

## 📄 Licença

Este projeto está sob a licença MIT.

👨‍💻 Desenvolvido por [Leonardo Mancilha](https://www.linkedin.com/in/leonardomancilha/)
