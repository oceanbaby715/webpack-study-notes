const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimize: true,// 是否压缩js
    minimizer: [
      new TerserPlugin({
        extractComments: false,//注释是否应提取到单独的文件 bundle.js.LICENSE.txt
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则匹配所有.css结尾的文件，对其使用style-loader和css-loader这两个loader
        use: ["style-loader", "css-loader"], //这里一定要注意按照顺序写，不然会报错的
      },
      {
        test: /\.(png|svg|jpg|gif)$/,//正则匹配以.png、.svg、.jpg、.gif结尾的文件，对其使用file-loader
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  }
}      
