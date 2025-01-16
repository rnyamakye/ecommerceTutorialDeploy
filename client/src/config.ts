interface Config {
  baseURL: string;
}

const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseURL:
          "https://ecommercebackend--ecommerce-tutorial-817f2.asia-east1.hosted.app",
      };
      break;
    case "local":
      config = {
        baseURL: "https://localhost:8000",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "production";
export const config = checkConfig(selectServer) as Config;
