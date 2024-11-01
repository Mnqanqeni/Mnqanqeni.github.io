const path = require('path');

module.exports = {
  entry: './js/app.js', // Entry file for your app
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
    ],
  },
  mode: 'development', // Set to 'production' for minified output
};
