import { WagmiConfig } from "wagmi";
import Box from "@mui/material/Box";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/test/Test.page";
import ErrorPage from "./pages/error/Error.page";
import Navbar from "./components/navbar/Navbar";
import { client } from "./config/web3";

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
  return (
    <WagmiConfig client={client}>
      <Box>
        <Navbar />
        <RouterProvider router={router} />
      </Box>
    </WagmiConfig>
  );
}

export default App;
