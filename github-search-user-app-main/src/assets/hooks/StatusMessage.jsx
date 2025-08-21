const StatusMessage = ({ loading, error, message }) => {
  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (message) return <p>{message}</p>;
  return null;
};

export default StatusMessage;
