const path = require('path');
const monkey = require('./monkey.dev.config');
const webpack = require('webpack');

const Terser = require('terser-webpack-plugin');

module.exports = {
    entry: monkey.config.entry,
    output: {
        path: path.resolve(__dirname, 'test'),
        filename: monkey.header.name.toLowerCase().replace(' ', '-') + '.js'
    },
    watch: true,
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(tpl|nunjucks|njk)$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'nunjucks-loader' },
                    { loader: 'html-minify-loader' }
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [{ loader: 'css-loader' }, { loader: 'postcss-loader' }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
        // new Terser({
        //     terserOptions: {
        //         mangle: false,
        //         output: {
        //             beautify: true
        //         }
        //     }
        // })
    ]
};
