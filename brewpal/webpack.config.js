var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
    context: __dirname,

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/app_staticfiles/js/react-render.js',
    ],

    output: {
        path: path.resolve('./app/app_staticfiles/js/bundles/'),
        publicPath: 'http://localhost:3000/app/app_staticfiles/js/bundles/',
        filename: "[name]-[hash].js",
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react']
            },
        ],

    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
}