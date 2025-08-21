import styles from "./formqrcode.module.css";

export default function QRDisplay({ qr }) {
  if (!qr) return null;

  return (
    <>
      <section>
        <img loading="lazy" src={qr} alt="Generated QR Code" />
      </section>
      <a className={styles.a} href={qr} download="qrcode.png">
        Download
      </a>
    </>
  );
}
