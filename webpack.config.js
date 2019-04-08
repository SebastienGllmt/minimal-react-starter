const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src"),
  entry: ["./main.js"],
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  plugins: [
    /** We remove non-English languages from BIP39 */
    new webpack.IgnorePlugin(/^\.\/(?!english)/, /bip39\/src\/wordlists$/),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
