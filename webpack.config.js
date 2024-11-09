const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/js/index.js"), 
  },
  output: {
    filename: '[name].[contenthash].js',   
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          }
        },
      },
      {
        test: /\.css$/, 
        use: ["style-loader", "css-loader"], 
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      template: "src/template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'), 
          to: path.resolve(__dirname, 'dist/assets'), 
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3004,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  mode: "development",
};
