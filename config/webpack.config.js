const path = require("path");
const { DefinePlugin } = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const loaderConfig = require("./loaders/load.js");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = (env, argv) => {
  const productionMode = argv.mode === "production";

  return {
    module: {
      rules: loaderConfig(env)
    },
    resolve: {
      alias: {
        Components: path.resolve(__dirname, "../src/components"),
        Data: path.resolve(__dirname, "../data"),
        Src: path.resolve(__dirname, "../src"),
        Styles: path.resolve(__dirname, "../src/styles")
      },
      extensions: ["*", ".js", ".jsx"]
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          // CSS
          allStyles: {
            name: "styles",
            test: /\.s?css$/,
            chunks: "all",
            enforce: true
          },
          printStyles: {
            name: "print",
            test: /\.print\.s?css$/,
            chunks: "all",
            enforce: true
          },

          // Javascript
          data: {
            name: "data",
            test: /\.json$/,
            chunks: "all",
            enforce: true
          },
          main: {
            name: "main",
            test: /\.js$/,
            chunks: "all",
            enforce: true
          },
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]|[\\/]vendor[\\/]/,
            chunks: "all",
            enforce: true
          }
        }
      }
    },
    output: {
      publicPath: ASSET_PATH
    },
    plugins: [
      new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname, "..") }),
      new HtmlWebPackPlugin({
        favicon: "./src/favicon.ico",
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: productionMode ? "[name].[contenthash].css" : "[name].css"
      }),
      new CopyWebpackPlugin(
        [
          // Copy over country svgs for CountryMap Component
          {
            from: "**/*",
            to: "maps",
            context: "src/components/CountryMap/maps"
          },
          // Copy PDFs, CSVs and other docs (mostly for Modal/TabsContent components)
          { from: "**/*", to: "docs", context: "docs" },
          // Copy over country flags for CountrySelect Component
          {
            from: "**/*",
            to: "flags",
            context: "src/components/CountrySelect/CountryFlag/images"
          }
        ],
        {
          flatten: true
        }
      ),
      new DefinePlugin({
        VIEW: JSON.stringify(env.view),
        GA_TRACKING_ID: JSON.stringify(productionMode ? "UA-126051298-1" : ""),
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  };
};
