const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: "development",

    output: {
        clean: true
    },
    
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                        sources: false,
                        minimize: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/, 
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/img/[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },

    optimization : {},

    plugins: [
        
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/img'),
                    to: path.resolve(__dirname, 'dist', 'assets/img')
                }
            ]
        }),
        
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        })
    ]



}