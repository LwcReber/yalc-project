const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const TsconfgPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")

const base = {
  entry: './src/index.ts',
  output: {
    pathinfo: false,
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'yalcSdk',
      type: 'umd'
    },
    globalObject: 'this'
  },
  plugins: [
    new webpack.DefinePlugin({
      // 如果需要web环境也能访问，必须用这个插件注入
      // 在runtime后根据 package.json 文件修改env的version
      'process.env': webpack.DefinePlugin.runtimeValue(() => {
        process.env.SDK_VERSION = require('./package.json').version
        return JSON.stringify(process.env)
      })
    }),
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false // 不将注释提取到单独的文件中
      })
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfgPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json")
      })
    ]
  }
}

module.exports = base
