const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin({
      hashDigestLength: 8
    }),
  ]
};
