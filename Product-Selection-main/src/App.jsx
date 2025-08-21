import React from 'react';
import Produto from './assets/Produto';
const App = () => {
  localStorage.removeItem('btc_legues');
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);  

  React.useEffect(() => {
    if (produto !== null) { 
      localStorage.setItem('produto', produto);

      const favicon = document.querySelector("link[rel='icon']");
      let iconPath = '';

      switch (produto) {
        case 'notebook':
          iconPath = 'public/icons/notebook.ico';
          break;
        case 'smartphone':
          iconPath = 'public/icons/smartphone.ico';
          break;
        case 'tablet':
          iconPath = 'public/icons/tablet.ico';
          break;
        case 'camera':
          iconPath = 'public/icons/camera.ico';
          break;
        case 'smartwatch':
          iconPath = 'public/icons/smartwatch.ico';
          break;
        default:
          iconPath = 'public/icons/question.ico'; // Se não for nenhum produto, mantém o ícone de "?"
      } 
      favicon.href = iconPath;
    }
  }, [produto]);

  const handleClick = (event) => {
    setProduto(event.target.innerText.toLowerCase());
  }

  return ( 
  <div>
    <h1>Preferência: {produto || 'Nenhum'}</h1>  
    <button onClick={handleClick}>Notebook</button>
    <button onClick={handleClick}>Smartphone</button>
    <button onClick={handleClick}>Tablet</button>
    <button onClick={handleClick}>Camera</button>
    <button onClick={handleClick}>Smartwatch</button>
    <Produto produto={produto} />
  </div>
  );
};

export default App;
