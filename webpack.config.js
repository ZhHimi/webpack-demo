const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader:'image-webpack-loader',
                        options: {
                            bypassOndebug: true,
                            disable: true,
                            pngquant: {
                                quality:[0.5,0.5],
                                speed: 4
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}