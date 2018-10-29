const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const loaderChain = [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: "css-loader",
      options: {
        sourceMap: true
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true
      }
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true
      }
    }
  ];

  const nullChain = "null-loader";

  const loaderSpec = [
    {
      test: /\.s?css$/,
      use: loaderChain,
      exclude: /print/
    },
    {
      test: /\.print\.s?css$/,
      use: env.view === "print" ? loaderChain : nullChain
    }
  ];

  return loaderSpec;
};
