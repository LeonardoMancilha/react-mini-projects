import QRCode from "qrcode";

export const generateQrCode = async (url) => {
  if (!url) throw new Error("Nenhum texto digitado!");

  return await QRCode.toDataURL(url, {
    width: 350,
    color: {
      dark: "#335383FF",
      light: "#EEEEEEFF",
    },
  });
};
