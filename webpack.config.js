const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app1: './a.js',
    // app2: './b.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-cheap-module-source-map',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            // presets: ['@babel/preset-env']
          },
        }
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 8,
            name: '[name]-[contenthash:8].[ext]',
            publicPath: './dist/'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin({
      hashDigestLength: 8
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'images/'),
          to: path.resolve(__dirname, 'dist/images/'),
        }
      ]
    })
  ]
};
