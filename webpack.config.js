'use strict';

var pkg = require('./package');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  
  entry: pkg.entry,

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].min.js'
  },

  externals: {
    'react': "React",
    'react-dom': 'ReactDOM'
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  devtool: 'source-map'
  
};