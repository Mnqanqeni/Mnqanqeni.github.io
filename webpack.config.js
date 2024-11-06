const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle:path.resolve(__dirname, "src/js/index.js"), 
  },
  output: {
    filename: '[bundle][contenthash].js',   
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename:'[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets:['@babel/preset-env'],
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
        // generator: {
        //   filename: 'assets/[name][hash][ext][query]',  // Specify where to save the assets
        // },
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Porfolio',
      template: "src/template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),  // Path to your source assets folder
          to: path.resolve(__dirname, 'dist/assets'),    // Destination folder in the dist folder
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  mode: "development",
};
