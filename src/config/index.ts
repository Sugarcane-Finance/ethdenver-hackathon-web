const config = {
  badgesSmartContractAddress: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
  sugarcaneManagerPrimaryAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  sugarcaneInvestmentRegistryAddress:
    "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",

  apiUrl: (path: string) => {
    const baseUrl = window.location.host.includes("localhost")
      ? "http://localhost:8080"
      : "";
    return `${baseUrl}${path}`;
  },
};

export default config;
