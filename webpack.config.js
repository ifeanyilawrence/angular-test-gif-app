const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe|gif|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test:/\.(css)$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader', 'svg-url-loader']
            }
        ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};