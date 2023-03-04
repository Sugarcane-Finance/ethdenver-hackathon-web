import React from "react";
import { useAccount } from "wagmi";

import Page from "../../components/page/Page";

import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import FinancialProducts from "./components/FinancialProducts";

const HomePage: React.FC<{}> = () => {
  const { isConnected } = useAccount();

  return (
    <Page>
      <Header />
      {isConnected && <Portfolio />}
      <FinancialProducts />
    </Page>
  );
};

export default HomePage;
