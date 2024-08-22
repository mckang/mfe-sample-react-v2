const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;
const todoformAppUrl = `${domain}/todoform/latest`;
const todolistAppUrl = `${domain}/todolist/latest`;
const authAppUrl = `${domain}/auth/latest`;


const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/host/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host_app",
      remotes: {
        todoform_app: `todoform_app@${todoformAppUrl}/remoteEntry.js`,
        todolist_app: `todolist_app@${todolistAppUrl}/remoteEntry.js`,
        auth_app: `auth_app@${authAppUrl}/remoteEntry.js`,        
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
