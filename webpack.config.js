const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          { test: /\.svg$/, use: 'svg-inline-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          {
            test: /\.(js|jsx)$/, // определяем тип файлов
            exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
            loader: "babel-loader",   // определяем загрузчик
            options:{
              "presets": [
                ["@babel/preset-react", {
                "runtime": "automatic"
              }]
              ]
            }
        }
        ]
    },
    devServer: {
      historyApiFallback: true,
      static: {
       directory: path.join(__dirname, "/public"),
     },
      port: 8081,
      open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html'
        }),
        new webpack.DefinePlugin({
          process: {env: {}}
      })
      ],
      mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}