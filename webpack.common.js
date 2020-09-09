const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const filePath = {
  src: {
    script: "./assets/js/script.js",
    style: "./assets/scss/style.scss",
  },
  dist: "./public/",
};

function createJSModule() {
  return {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };
}

function createSCSSModule() {
  return {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          url: false,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [autoprefixer()],
          sourceMap: true,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      },
    ],
  };
}

module.exports = {
  entry: [
    filePath.src.script,
    filePath.src.style,
  ],
  output: {
    filename: "./js/script.js",
    path: path.resolve(__dirname, filePath.dist),
  },
  module: {
    rules: [
      createJSModule(),
      createSCSSModule(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets/html/",
          to: ".",
        },
      ],
    }),
  ],
};
