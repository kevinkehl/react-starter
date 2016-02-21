'use strict';

require('babel-polyfill'); // Object.assign
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// Ensure the target directory exists.
const outputPath = __dirname + '/dist';
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(__dirname + '/dist');
}

module.exports = {
  entry: {
    application: ['./app'],
    project: ['./lib'],
  },

  output: {
    path: outputPath,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ReactStarter'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },

  resolve: {
    root: [
      path.resolve('./lib'),
      path.resolve('./app'),
    ],
    modulesDirectories: [
      'node_modules',
    ],
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
    fallback: [path.join(__dirname, 'node_modules')],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
  },

  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  },

  devtool: 'cheap-module-source-map',

  postcss: function () {
    return [autoprefixer];
  },

  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css',
          'postcss',
        ],
      },
      {
        test: /\.scss$/,
        loader: 'sass',
      },
      {
        test: /\.jsx?$/,
        loaders: [
          'babel-loader?cacheDirectory=true&presets[]=es2015&presets[]=react',
        ],
        exclude: [
          /node_modules/,
        ],
      },
    ],
  },
};
