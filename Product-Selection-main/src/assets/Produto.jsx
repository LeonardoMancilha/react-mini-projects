import React from 'react';

const Produto = ({ produto }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (produto !== null) {
      setLoading(true);
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [produto]);
  
  if (loading) return <p>Carregando...</p>;
  if (!data) return null;

  const numero = parseFloat(data.preco);
  const precoFormatado = numero.toFixed(0);
  
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$: {precoFormatado}</p>
      <p>Descrição: {data.descricao}</p>
      {data.fotos && data.fotos.length > 0 ? (
        <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
      ) : (
        <p>Imagem indisponível.</p>
      )}
    </div>
  );
};

export default Produto;
