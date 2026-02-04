import path from "path";
import webpack from "webpack";

const nextConfig = {
  webpack: (config: webpack.Configuration) => {
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias || Array.isArray(config.resolve.alias)) {
      config.resolve.alias = {};
    }
    (config.resolve.alias as Record<string, string>)["@repo/models"] = path.resolve(__dirname, "packages/models/src");
    return config;
  },
};

export default nextConfig;