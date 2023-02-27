import React from "react";

import AssetClassSection from "./AssetClassSection";
import aaveLogo from "../../../assets/aave-logo.png";
import ssvLogo from "../../../assets/ssv-logo.png";
import uniswapLogo from "../../../assets/uniswap-logo.png";

const FinancialProducts: React.FC<{}> = () => {
  return (
    <>
      <AssetClassSection
        title="Lending"
        youtubeVideoId="aTp9er6S73M"
        products={[
          {
            name: "AAVE",
            yield: "5-10%",
            risk: "High",
            logo: aaveLogo,
          },
        ]}
      />
      <AssetClassSection
        title="Liquidity Providing"
        youtubeVideoId="cizLhxSKrAc"
        products={[
          {
            name: "SSV",
            yield: "5-10%",
            risk: "Medium",
            logo: ssvLogo,
          },
        ]}
      />
      <AssetClassSection
        title="Staking"
        youtubeVideoId="ALEMhA82UoU"
        products={[
          {
            name: "Uniswap",
            yield: "5-10%",
            risk: "Low",
            logo: uniswapLogo,
          },
        ]}
      />
    </>
  );
};

export default FinancialProducts;
