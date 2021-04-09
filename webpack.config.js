const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './js/app.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[name][ext]'
  },

  mode: 'development',

  devtool: 'source-map',

  devServer: {
    contentBase: './public',
    hot: true,
    
  },
  module: {
    rules: [
    
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
     
    ]
},
  plugins:[
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
       
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new HtmlWebpackPlugin({
      template: './kontakt.html',
      inject: true,
      chunks: ['kontakt'],
      filename: 'kontakt.html'
    }),
    new HtmlWebpackPlugin({
      template: './brany.html',
      inject: true,
      chunks: ['brany'],
      filename: 'brany.html'
    }),
        new HtmlWebpackPlugin({
      template: './ochrana-udaju.html',
      inject: true,
      chunks: ['ochrana-udaju'],
      filename: 'ochrana-udaju.html'
    }),
    new HtmlWebpackPlugin({
      template: './ostatni.html',
      inject: true,
      chunks: ['ostatni'],
      filename: 'ostatni.html'
    }),new HtmlWebpackPlugin({
      template: './schody.html',
      inject: true,
      chunks: ['schody'],
      filename: 'schody.html'
    }),
    new HtmlWebpackPlugin({
      template: './zabradli.html',
      inject: true,
      chunks: ['zabradli'],
      filename: 'zabradli.html'
    }),
    new HtmlWebpackPlugin({
      template: './dekujeme.html',
      inject: true,
      chunks: ['dekujeme'],
      filename: 'dekujeme.html'
    }),
    new HtmlWebpackPlugin({
      template: './404.html',
      inject: true,
      chunks: ['404'],
      filename: '404.html'
    }),
  ]
};