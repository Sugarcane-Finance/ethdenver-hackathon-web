interface Card {
  data: {
    keyId: string;
    publicKey: string;
  };
}

interface SaveCardToCircleParams {
  keyId: string;
  encryptedData: string;
}
const saveCardToCircle = async ({
  keyId,
  encryptedData,
}: SaveCardToCircleParams): Promise<Card> => {
  const data: Card = await fetch("http://localhost:8080/create-card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyId,
      encryptedData,
    }),
  }).then((response) => response.json());
  return data;
};

export default saveCardToCircle;
