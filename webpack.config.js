const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$|\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    postcss: function () {
        return [
            require('precss'),
            require('postcss-normalize'),
            require('autoprefixer')
        ];
    }
};