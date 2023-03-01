interface PCIPublicKeyResponse {
  data: {
    keyId: string;
    publicKey: string;
  };
}
const getPCIPublicKey = async (): Promise<PCIPublicKeyResponse> => {
  const data: PCIPublicKeyResponse = await fetch(
    "http://localhost:8080/pci-public-key"
  ).then((response) => response.json());
  return data;
};

export default getPCIPublicKey;
