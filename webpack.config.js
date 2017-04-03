'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
let webpackConfig = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/app.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: "[id]-[hash:8]-[name].js" //打包后输出文件的文件名
    },
    module: { //在配置文件里添加JSON loader
        loaders: [{
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
                //loader: 'style-loader!css-loader?modules' //添加对样式表的处理,感叹号的作用在于使同一文件能够使用不同类型的loader
            },
            {　　　　　　
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8]-[name].[ext]'　　　　
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright 佳期"), //在这个数组中new一个就可以了
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new ExtractTextPlugin("[id]-[hash:8]-[name].css"),
        new CleanPlugin(['./dist'], {
            root: __dirname,
            verbose: true, //将log写到 console.
            dry: false, //true时不要删除任何东西
        })
    ],
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        //colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新,
        hot: true
    }
}

module.exports = webpackConfig;