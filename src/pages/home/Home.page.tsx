import React from "react";
import { useAccount } from "wagmi";

import Page from "../../components/page/Page";

import Header from "./components/Header";
import FinancialProducts from "./components/FinancialProducts";

const HomePage: React.FC<{}> = () => {
  const { address, isConnected } = useAccount();

  console.log({ address, isConnected });

  return (
    <Page>
      <Header />
      {/* <Portfolio /> */}
      <FinancialProducts />
    </Page>
  );
};

export default HomePage;
