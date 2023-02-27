import { createClient } from "wagmi";
import { configureChains } from "wagmi";
import { baseGoerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

const { chains, provider, webSocketProvider } = configureChains(
  [baseGoerli],
  [publicProvider()] // TODO use infura
);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export const connector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: "Sugarcane",
    jsonRpcUrl: "https://goerli.base.org",
  },
});
