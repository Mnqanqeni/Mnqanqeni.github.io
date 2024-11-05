const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',  
  output: {
    filename: 'main.js',       
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  module: {
    rules: [
      {
        test: /\.js$/,         
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,       
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'source-map', 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],       
  devServer: {
    static: './dist',
    port: 3000,                 
    open: true,                   
    hot: true,                    
},
  mode: 'development',           
};
