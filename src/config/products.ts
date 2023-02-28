import aaveLogo from "../assets/aave-logo.png";
import ssvLogo from "../assets/ssv-logo.png";
import uniswapLogo from "../assets/uniswap-logo.png";

export interface Product {
  name: string;
  yield: string;
  risk: "High" | "Medium" | "Low";
  logo: string;
  category: "lending" | "lp" | "staking";
}

const products: Product[] = [
  {
    name: "AAVE",
    yield: "5-10%",
    risk: "Low",
    logo: aaveLogo,
    category: "lending",
  },
  {
    name: "SSV",
    yield: "5-10%",
    risk: "Medium",
    logo: ssvLogo,
    category: "lp",
  },
  {
    name: "Uniswap",
    yield: "5-10%",
    risk: "Low",
    logo: uniswapLogo,
    category: "staking",
  },
];

export default products;
