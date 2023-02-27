import React from "react";
import { useAccount } from "wagmi";

import Page from "../../components/page/Page";

import Header from "./components/Header";
import AssetClassSection from "./components/AssetClassSection";

const HomePage: React.FC<{}> = () => {
  const { address, isConnected } = useAccount();

  console.log({ address, isConnected });

  return (
    <Page>
      <Header />
      {/* <Portfolio /> */}
      <AssetClassSection title="Lending" youtubeVideoId="aTp9er6S73M" />
      <AssetClassSection
        title="Liquidity Providing"
        youtubeVideoId="cizLhxSKrAc"
      />
      <AssetClassSection title="Staking" youtubeVideoId="ALEMhA82UoU" />
    </Page>
  );
};

export default HomePage;
