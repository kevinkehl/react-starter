'use strict';

require('babel-polyfill'); // Object.assign
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// Ensure the target directory exists.
const outputPath = path.join(__dirname, 'dist');
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

module.exports = {
  entry: {
    application: ['./app'],
    project: ['./lib'],
    devServer: ['webpack-dev-server/client?http://0.0.0.0:3000'],
    hotLoader: ['webpack/hot/only-dev-server'],
  },

  output: {
    path: outputPath,
    publicPath: '/assets/',
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

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
          'react-hot',
          'babel-loader?cacheDirectory=true&presets[]=es2015&presets[]=react',
        ],
        exclude: [
          /node_modules/,
        ],
      },
    ],
  },
};
