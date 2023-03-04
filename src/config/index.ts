const config = {
  badgesSmartContractAddress: "0x14A84035F598914D79A8AAE35AB34998C181C7Ca",
  apiUrl: (path: string) => {
    const baseUrl = window.location.host.includes("localhost")
      ? "http://localhost:8080"
      : "";
    return `${baseUrl}${path}`;
  },
};

export default config;
