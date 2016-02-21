var path = require('path');

module.exports = {
    entry: "./frontend/src/entry.js",
    output: {
        path: path.resolve(__dirname, "frontend/dist"),
        filename: "bundle.js"
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
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    }
};
