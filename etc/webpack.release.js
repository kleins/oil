const helpers = require('./helpers');
const util = require('util');
const debugLog = util.debuglog('oil-debug');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const prodConfig = require('./webpack.prod.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = webpackMerge(prodConfig, {

  /**
   * Webpack mode (see https://webpack.js.org/concepts/mode/ for details).
   */
  mode: 'production',

  output: {
    // the public path which is used by all System.require
    publicPath: `//oil.axelspringer.com/release/${process.env.npm_package_version}/`,
  }
});

debugLog('Using following webpack release config:', config);
module.exports = config;
