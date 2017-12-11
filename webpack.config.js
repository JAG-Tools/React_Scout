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
    },externals:{
    "d3" : "https://d3js.org/d3.v3.min.js"
  },
node: {
  fs :"empty",
  net : "empty",
  tls : "empty"
},
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}