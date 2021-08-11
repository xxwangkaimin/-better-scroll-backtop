const webpack = require('webpack')
const {merge} = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base')

const config = merge(baseConfig, {
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, '../'),
        port: 8080,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})

module.exports = config
