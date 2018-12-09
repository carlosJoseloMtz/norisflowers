const path = require('path')
const webpack = require('webpack')

const joinPath = (src) => {
  return path.join(__dirname, src)
}

module.exports = {
  entry: {
    "app": joinPath('src/app.js'),
    "home-page": joinPath('src/pages/home-page.js'),
    "category-page": joinPath('src/pages/category-page.js')
  },

  output: {
    publicPath: '/build/',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].js',
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      BASE_HOST: JSON.stringify('https://norisflowers.local:9002')
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname),
    publicPath: '/build/',
    watchContentBase: true,
    index: 'index.html',
    compress: true,
    clientLogLevel: 'info',
    port: 8000,
    historyApiFallback: true
  }
}
