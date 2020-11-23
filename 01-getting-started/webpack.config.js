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
  }
}