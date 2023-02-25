import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/test/Test.page";
import ErrorPage from "./pages/error/Error.page";

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
    <div className="App">
      <header className="App-header">hello</header>
      <Button variant="contained">Hello World</Button>

      <Box>Pages:</Box>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
