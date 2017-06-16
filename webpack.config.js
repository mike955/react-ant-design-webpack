var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  devtool: "source-map",
  entry: './src/root.js',
  module: {
    loaders:[
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: [
            'react-html-attrs',
            ["import", { libraryName: "antd", style: "less" }]
          ]
        }
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: './src/bundle.js'
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}
