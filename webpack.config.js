const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const minify = false;

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // {
            //     test: /\.scss$|\.css$/,
            //     loader: "style-loader!css-loader!postcss-loader"
            // },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', [
                    `css?-url&sourceMap${minify ? '&minimize' : ''}`,
                    'postcss?sourceMap&outputStyle=expanded'].join('!'))
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer')
        ];
    }
};