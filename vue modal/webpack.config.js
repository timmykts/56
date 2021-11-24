const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const distFolder = 'dist'

module.exports = {
  entry: {

    uimini: path.resolve(__dirname, 'src', 'builds/dev.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, distFolder)
  },
  module: {
    rules: [

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {

              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'test.html')
    })
  ]
}
