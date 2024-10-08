const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const todoformAppUrl = "http://localhost:7002";
const todolistAppUrl = "http://localhost:7003";
const authAppUrl = "http://localhost:7000";


const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:7001/',
  },  
  devServer: {
    port: 7001,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host_app",
      filename: "remoteEntry.js",
      remotes: {
        todoform_app: `todoform_app@${todoformAppUrl}/remoteEntry.js`,
        todolist_app: `todolist_app@${todolistAppUrl}/remoteEntry.js`,
        auth_app: `auth_app@${authAppUrl}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
