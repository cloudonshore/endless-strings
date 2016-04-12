var webpack = require('webpack');
var _ = require('lodash');
var config = require('./webpack.config.base');


config = _.merge(config, {
    devServer: {
        port: 4141,
        contentBase: "./build",
        hot: true
    },
    entry: _.assign({}, config.entry, {
        app: [
            'webpack-dev-server/client?http://localhost:4141',
            'webpack/hot/only-dev-server'
        ].concat(config.entry.app)
    }),
    plugins: config.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // can't use chunkhash with HMR
            filename: 'scripts/vendor.[hash:7].js',
            minChunks: Infinity
        })
    ]),
    module: {
        loaders: [
            {loaders: ['react-hot'].concat(config.module.loaders[0].loaders)}
        ]
    }
});

module.exports = config;
