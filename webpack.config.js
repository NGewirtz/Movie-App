const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./public/components/Entry.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", '.jsx', '*']
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
};
