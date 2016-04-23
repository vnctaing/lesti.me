var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: "./frontend/src/entry.js",
    output: {
        path: path.resolve(__dirname, "frontend/dist"),
        filename: "bundle.js",
        publicPath: "http://localhost:8080/", // Development server
    },
    module: {
        loaders: [
            { test: /\.less$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'less-loader']},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, "frontend/src")],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
              test: /\.css$/,
              loader: "style!css?sourceMap"
            },

            {
              test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
              test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: "file"
            }, {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin({
                '_': 'lodash',
                'React': 'react',
                'ReactDOM': 'react-dom',
                'jQuery': 'jquery',
                '$': 'jquery',
                'Promise': 'exports?global.Promise!es6-promise',
                'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
            })],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    devServer: {
      historyApiFallback: true
    },
};
