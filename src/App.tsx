import {
  EthersAppContext,
  EthersModalConnector,
  // contractsContextFactory
} from "eth-hooks/context";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/test/Test.page";
import ErrorPage from "./pages/error/Error.page";
import { TCreateEthersModalConnector } from "eth-hooks/models";
import { useCallback } from "react";

const web3Config = {};

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
  const createLoginConnector: TCreateEthersModalConnector = useCallback(
    (id?: string) => {
      if (web3Config) {
        //@ts-ignore
        const connector = new EthersModalConnector({ ...web3Config }, id);
        return connector;
      }
    },
    [web3Config]
  );

  return (
    <div>
      <header>hello</header>
      <Button variant="contained">Hello World</Button>
      <Box>Pages:</Box>
      <RouterProvider router={router} />
    </div>
  );
}

function Web3App() {
  // export const {
  //   ContractsAppContext,
  //   useAppContractsActions,
  //   useAppContracts,
  //   useLoadAppContracts,
  //   useConnectAppContracts,
  // } = contractsContextFactory<
  //   /* the contractNames (keys) in config output */
  //   keyof TAppConnectorList,
  //   /* the type of the config output  */
  //   TAppConnectorList,
  //   /* A type that infers the value of each contractName: contract pair*/
  //   TTypedContract<keyof TAppConnectorList, TAppConnectorList>
  // >(contractConnectorConfig);

  return (
    // <ContractsAppContext>
    <EthersAppContext>
      <App />
    </EthersAppContext>
    // </ContractsAppContext>
  );
}

export default Web3App;
