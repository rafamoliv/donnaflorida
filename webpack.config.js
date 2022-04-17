const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  target: "web",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "scripts/bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //Definindo as regras para o file-loader
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    historyApiFallback: true,
  },
};
