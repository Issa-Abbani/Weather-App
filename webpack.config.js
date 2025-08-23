const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", 
  entry: "./src/js/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    watchFiles: ["./src/template.html"],
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      inject: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
