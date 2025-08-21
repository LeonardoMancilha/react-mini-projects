import React from 'react';
import Produto from './assets/Produto';

const App = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function getData(event) {
    try {
      setLoading(true);
      const url = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
      const response = await url.json();
      if (!response.id) {
        throw new Error('O produto não foi encontrado!');
      }
      setData(response);
      setLoading(false);

    } catch (error) {
      console.error(error);
    } 
  }

  return ( 
  <div>
    <button onClick={getData} style={{ margin: '.5rem' }}>Notebook</button>
    <button onClick={getData} style={{ margin: '.5rem' }}>Smartphone</button>
    <button onClick={getData} style={{ margin: '.5rem' }}>Tablet</button>
    {loading && <p>Carregando...</p>}
    {!loading && data && <Produto data={data} /> }
  </div>
  );
}

export default App;
