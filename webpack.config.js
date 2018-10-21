var path = require('path')
var webpack = require('webpack')

var host = 'localhost.u8sand.net'
var port = '9876'

module.exports = {
  entry: {
    export: path.join(__dirname, 'src') + '/index.ts',
  },
  mode: 'development',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].js',
    library: ['cognition', 'cognition-provider-couchdb', '[name]'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname),
    ],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
}
