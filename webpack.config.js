const { resolve } = require("path");

module.exports = {
  entry: resolve(__dirname, "src/index.tsx"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
              plugins: ["babel-plugin-styled-components"]
            }
          },
          "ts-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "json"]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    host: "0.0.0.0",
    port: 3000
  }
};
