var webpack = require("webpack");

module.exports = {
    entry: {
        index: "./index.js"
    },
    output: {
        path: __dirname,
        filename: "./build/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ]
    }
};