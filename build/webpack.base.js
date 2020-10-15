const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/chunk-[name].[hash].js',
        chunkFilename: 'static/js/chunk-[name].[hash].js',
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
                test: /\.vue$/,
                loader: 'vue-loader'
            },
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
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject: true,
            title: 'Vue Cli',
            favicon: path.resolve(__dirname, '../favicon.png')
        })
    ]
}
