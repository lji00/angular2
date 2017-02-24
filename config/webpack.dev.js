var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function(options) {
  return webpackMerge(commonConfig({env: ENV}), {
    //devtool: 'cheap-module-eval-source-map',
    devtool: 'cheap-module-source-map',
    output: {
      //devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      path: helpers.root('dist'),
      //The publicPath specifies the public URL address of the output files when referenced in a browser.
      //You can test this by going to localhost:9080/assets/bundle.js then check in your application for these files.
      // They are only generated when you run the webpack-dev-server.
      publicPath: 'http://localhost:9080/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },

    plugins: [
      new ExtractTextPlugin('[name].css')
    ],

    devServer: {
      historyApiFallback: true,
      stats: 'minimal'
    }
  });
}
