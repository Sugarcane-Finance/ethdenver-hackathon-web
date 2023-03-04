interface ExecuteTransactionParams {
  address: string;
  transaction: string;
}
const executeTransaction = async (
  params: ExecuteTransactionParams
): Promise<void> => {
  await fetch("http://localhost:8080/execute-transaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((response) => response.json());
};

export default executeTransaction;
