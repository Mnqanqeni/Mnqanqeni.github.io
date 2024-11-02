const path = require('path');

module.exports = {
  entry: './src/js/index.js',  
  output: {
    filename: 'main.js',       
    path: path.resolve(__dirname, 'dist'),
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
  devServer: {
    static: './dist',
    port: 3000,                 
    open: true,                   
    hot: true,                    
},
  mode: 'development',           
};
