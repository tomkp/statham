var autoprefixer = require('autoprefixer');
var precss = require('precss');
var normalize = require('postcss-normalize');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel' // 'babel-loader' is also a legal name to reference
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss, normalize];
    }
};