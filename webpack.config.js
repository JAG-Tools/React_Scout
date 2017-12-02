const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    node: {
        fs: 'empty',
        net: 'empty'
      },
    
    module: {
        unknownContextRegExp: /$^/,
        unknownContextCritical: false,
    
        // Disable handling of requires with a single expression
        exprContextRegExp: /$^/,
        exprContextCritical: false,
    
        // Warn for every expression in require
        wrappedContextCritical: true,
        loaders: [
            {test: /\.json$/, loader: 'json', exclude: /node_modules/},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/}, 
            {test: /\.svg$/, loader: 'svg-inline-loader',  exclude: /node_modules/}           
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}