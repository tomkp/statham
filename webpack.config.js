
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
        return [
            require('autoprefixer'),
            require('precss'),
            require('postcss-normalize'),
            require('postcss-less-vars'),
            require('postcss-nesting')
        ];
    }
};