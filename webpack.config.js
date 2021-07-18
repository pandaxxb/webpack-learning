const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].[hash:8].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.ttf$/,
        loader: ['url-loader']
      },
      {
        test: /\.xml$/,
        loader: 'xml-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(),
    // new WebpackManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    chunkIds: 'named',
  },
  devtool: 'inline-source-map',
}