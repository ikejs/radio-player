const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
module.exports = withPlugins([withImages], {
  target: 'serverless',
  webpack: (config) => {
    config.node = {
    fs: "empty",
  };
  config.module.rules.push({
    test: /\.(glb|gltf|bin)$/,
    use: {
      loader: "file-loader",
    },
  });
  return config;
  },
});