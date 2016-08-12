const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
        index: [
            './src/js/main.js',
            './src/css/main.scss',
        ],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.s?css$/, loader: ExtractTextPlugin.extract('css!sass') },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|otf|ttf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]',
                },
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${__dirname}/src/index.html`,
            hash: true,
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: false,
        }),
        new NgAnnotatePlugin({
            add: true,
        }),
    ],
};
