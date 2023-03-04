import React from "react";
import { useAccount } from "wagmi";

import Page from "../../components/page/Page";

import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import FinancialProducts from "./components/FinancialProducts";

const HomePage: React.FC<{}> = () => {
  const { isConnected } = useAccount();

  return (
    <Page>
      <Header />
      {isConnected && <UserProfile />}
      <FinancialProducts />
    </Page>
  );
};

export default HomePage;
