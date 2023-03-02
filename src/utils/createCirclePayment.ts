interface Card {
  data: {
    keyId: string;
    publicKey: string;
  };
}

interface CreateCirclePaymentParams {
  amount: string;
  cardId: string;
}
const createCirclePayment = async (
  params: CreateCirclePaymentParams
): Promise<Card> => {
  const data: Card = await fetch("http://localhost:8080/create-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((response) => response.json());
  return data;
};

export default createCirclePayment;
