const config = {
  apiUrl: (path: string) => {
    const baseUrl = window.location.host.includes("localhost")
      ? "http://localhost:8080"
      : "";
    return `${baseUrl}${path}`;
  },
};

export default config;
