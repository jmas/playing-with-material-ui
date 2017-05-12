const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    // Entry points to the project
    entry: path.join(__dirname, '/src/app/root.js'),
    // Server Configuration options
    devServer: {
        contentBase: 'src/www', // Relative directory for base of server
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js',
    },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, 'src')),
    ],
    module: {
        loaders: [
            {
                // React-hot loader and
                test: /\.(js|jsx)$/, // All .js files
                loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath],
            },
        ],
    },
    resolve: {
        alias: {
            'components': path.resolve(__dirname, 'src', 'app', 'components'),
            'utils': path.resolve(__dirname, 'src', 'app', 'utils'),
            'pages': path.resolve(__dirname, 'src', 'app', 'pages'),
        }
    },
};

module.exports = config;