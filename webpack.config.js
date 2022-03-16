
const webpack = require('webpack');
const path = require('path');

module.exports = config => {
  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'mamoka-credit.js'
    },
    module: {
      rules: [
        { test: /\.html$/i, loader: 'html-loader' }
      ]
    }
  }
};
