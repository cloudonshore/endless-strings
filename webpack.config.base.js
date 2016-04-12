var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        app: ['./src/main.jsx'],
        vendor: [
            // common vendor packages go here
            "lodash",
            "react",
            "superagent"
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'scripts/[name].[chunkhash:7].js'
    },
    recordsPath: path.join(__dirname, "webpack.records.json"),
    devtool: 'source-map',

    plugins: [
        new HtmlPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('styles/styles.[hash:7].css', {allChunks: true}),
        new webpack.NoErrorsPlugin(),
        new ForceCaseSensitivityPlugin()
    ],
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less?$/,
                loader: "style!css!less"
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            { 
                test: /\.(png|jpg|jpeg|gif)/, 
                loader: 'file-loader' 
            }
        ]
    }
};