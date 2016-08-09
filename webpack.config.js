
const path = require('path');
const webpack = require('webpack');
const fs =require('fs');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const isProd = (process.env.NODE_ENV === 'production');


const minify = true;
const externalStyleSheets = ExtractTextPlugin.extract('style', [
    `css?-url&sourceMap${minify ? '&minimize' : ''}`,
    'postcss?sourceMap&outputStyle=expanded'].join('!'));

const inlineStyleSheets = "style-loader!css-loader!postcss-loader";

const babelrc = JSON.parse(fs.readFileSync('./.babelrc').toString());


const config = {
    debug: !isProd,

    devtool: 'source-map',

    entry: {
        webpack: 'webpack-hot-middleware/client',
        main: './src/application/Root.js',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: (isProd?externalStyleSheets:inlineStyleSheets)
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|lib/,
                query: babelrc
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/favicon.png',
            inject: 'body',
        }),
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd()
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */"vendor",
            /* filename= */"vendor.bundle.js"
        )
    ],
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer')
        ];
    }
};


if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
        })
    ]);
}

module.exports = config;


