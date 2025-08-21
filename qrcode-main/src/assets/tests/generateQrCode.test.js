import { generateQrCode } from "../utils/generateQrCode";
import QRCode from "qrcode";

jest.mock("qrcode");

describe("generateQrCode", () => {
  it("should throw error if URL is not provided", async () => {
    await expect(generateQrCode("")).rejects.toThrow("Nenhum texto digitado!");
  });

  it("should call QRCode.toDataURL with correct options", async () => {
    QRCode.toDataURL.mockResolvedValue("data:image/png;base64,fakeData");

    const result = await generateQrCode("https://example.com");
    expect(QRCode.toDataURL).toHaveBeenCalledWith("https://example.com", {
      width: 350,
      color: {
        dark: "#335383FF",
        light: "#EEEEEEFF",
      },
    });
    expect(result).toBe("data:image/png;base64,fakeData");
  });
});
