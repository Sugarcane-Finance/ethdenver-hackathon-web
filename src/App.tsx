import { WagmiConfig, createClient, useNetwork } from "wagmi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/test/Test.page";
import ErrorPage from "./pages/error/Error.page";

import { configureChains } from "wagmi";
import { baseGoerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

const { chains, provider, webSocketProvider } = configureChains(
  [baseGoerli],
  [publicProvider()] // TODO use infura
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const connector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: "Sugarcane",
    jsonRpcUrl: "https://goerli.base.org",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

function App() {
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector,
  });
  const { disconnect } = useDisconnect();

  return (
    <div style={{ textAlign: "center" }}>
      <Box my={2}>
        <Box>Address: {address || "No address"} </Box>
        <Box>Connected: {isConnected ? "Yes" : "No"} </Box>
      </Box>
      <Button
        sx={{ mb: 2 }}
        variant="contained"
        onClick={() => {
          isConnected ? disconnect() : connect();
        }}
      >
        {isConnected ? "Disconnect" : "Connect"}
      </Button>
      <Box>
        <>
          {chain && <div>Connected to {chain.name}</div>}
          {chains && (
            <div>Available chains: {chains.map((chain) => chain.name)}</div>
          )}
        </>
      </Box>
      <RouterProvider router={router} />
    </div>
  );
}

function Web3App() {
  return (
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  );
}

export default Web3App;
