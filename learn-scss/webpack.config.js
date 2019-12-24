const { resolve } = require("path");
const { TypedCssModulesPlugin } = require("typed-css-modules-webpack-plugin");

module.exports = {
  mode: "development",
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
              presets: ["@babel/preset-env", "@babel/react"]
            }
          },
          "ts-loader"
        ]
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2,
              modules: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [require("autoprefixer")({ grid: true })]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new TypedCssModulesPlugin({
      globPattern: "src/**/*.scss"
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    host: "0.0.0.0",
    port: 3000
  }
};
