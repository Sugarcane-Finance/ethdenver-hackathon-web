import { StaticJsonRpcProvider } from "@ethersproject/providers";

const rpcEndpoint = "https://goerli.base.org";

export const mainnetScaffoldEthProvider = new StaticJsonRpcProvider(
  rpcEndpoint
);
