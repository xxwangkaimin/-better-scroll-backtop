const path = require('path')

module.exports = {
    entry: {
        app: './src/plugins/back-top/index.ts'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
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
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 2048,
                            // use explicit fallback to avoid regression in url-loader>=1.1.0
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'static/image/[name].[hash:8].[ext]'
                                }
                            },
                            esModule: false
                        }
                    }
                ]
            }
        ]
    }
}
