const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputPath = path.resolve(__dirname, "build");
const autoprefixer = require("autoprefixer");
console.log(__dirname)
module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: outputPath,
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },

      {
        test: /\.s?(a|c)ss$/,
        include: [
          path.resolve(__dirname, "./src/assets/"),
          path.resolve(__dirname, "./node_modules/semantic-ui-css")
        ],
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  browsers: ["ie >= 8", "last 4 version"]
                })
              ],
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      },

      {
        test: /\.(gif|woff(2)?|eot|ttf|png|jpg|jpeg|svg)$/,

        include: [
          path.resolve(__dirname, "./src/assets/"),
          path.resolve(__dirname, "./node_modules/semantic-ui-css")
        ],
        use: "url-loader?limit=10000"
      }
    ]
  },

  plugins: [
     new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/assets/index.html"),
      filename: "index.html",
      path: outputPath
    }), 
   // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname,
    port: 8000,
    historyApiFallback: true,
    
    hot: true,
    host: "127.0.0.1"
  },
  mode: "development"
};
