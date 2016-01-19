'use strict';

var webpackConfig = require('./webpack.config');
var dist = './dist';
var assets = './assets';
var modules = {
  react: 'node_modules/react/dist/react.js',
  reactDOM: 'node_modules/react-dom/dist/react-dom.js'
}

module.exports = {
  paths: {
    dist: {
      base: dist
    },
	assets: {
      base: assets
    }
  },
  vendor: {
    modules: [
      modules.react,
      modules.reactDOM
    ]
  },
  clean: [
    dist + '/index.+(js|min.js|min.js.map)'
  ],
  webpack: webpackConfig,
  server: {
    host: 'localhost',
    port: 8989,
    livereload: false,
    directoryListing: false,
    open: true
  }
};