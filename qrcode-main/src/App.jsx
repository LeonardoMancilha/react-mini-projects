import React from "react";
import "./App.css";
import QRForm from "./assets/Components/QRForm";
import QRDisplay from "./assets/Components/QRDisplay";
import { generateQrCode } from "./assets/utils/generateQrCode";
import { isValidURL } from "./assets/utils/isValidURL";

function App() {
  const [url, setUrl] = React.useState("");
  const [qr, setQr] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleGenerateQRCode = async () => {
    if (!isValidURL(url)) {
      setError("Por favor, insira uma URL válida (ex: https://google.com)");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const qrCodeUrl = await generateQrCode(url);
      setQr(qrCodeUrl);
      setUrl("");
    } catch (error) {
      console.error("Erro ao gerar QR Code:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <h1>Gere Seu QR Code</h1>
      <QRForm
        url={url}
        setUrl={setUrl}
        onGenerate={handleGenerateQRCode}
        disabled={!url || loading}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <QRDisplay qr={qr} />
    </main>
  );
}

export default App;
