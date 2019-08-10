const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/bundle.[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['transform-object-rest-spread', '@babel/plugin-proposal-class-properties'],
          },
        }],
      },
      // handles CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // this handles .less translation
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],

      },
      // this handles videos
      {
        test: /\.avi$|\.mp4$|\.mov$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            outputPath: 'assets/',
          },
        }],
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            outputPath: 'assets/',
          },
        }],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          }],
      },
      {
        test: /\.otf(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              mimetype: 'application/font-otf',
              outputPath: 'fonts/',
            },
          }],
      },
    ],
  },
  devServer: { // configuration for webpack-dev-server
    contentBase: path.join(__dirname, '../dist'),
    port: 3000, // port to run dev-server
    hot: true,
    compress: true,
    proxy: {
      '/': 'http://127.0.0.1:5000'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html', filename: 'index.html' }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
}
