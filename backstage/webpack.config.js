var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'whatwg-fetch',
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        './views/app.js',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'views'),
            ],
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader'],
        }, {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, 'views'),
            ],
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader?sourceMap=true&sourceMapContents=true'
            })
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'views'),
            ],
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]'
            })
        }],
    },
    resolve: {
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react'),
        },
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new ExtractTextPlugin("bundle.css")
    ],
    devServer: {
        inline: true
    }
};
