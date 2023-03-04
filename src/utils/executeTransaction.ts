import config from "../config";

interface ExecuteTransactionParams {
  address: string;
  transaction: string;
}
const executeTransaction = async (
  params: ExecuteTransactionParams
): Promise<void> => {
  const result = await fetch(config.apiUrl("/execute-transaction"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((response) => {
    return response.json();
  });
};

export default executeTransaction;
