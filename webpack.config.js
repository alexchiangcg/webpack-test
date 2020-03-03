// nodejs 要搬移任何的檔案都要靠一個叫path的api來做
var path = require('path');


module.exports = {
    context: path.resolve(__dirname, 'src'),

    // entry：是我們的進入點，我指定路徑是 index.js
    entry: './index.js',

    // output：打包輸出後的檔案和路徑
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ],
        loaders: [{
            test: /\.scss$/,
            //  loader 是有順序的，應用模式是由右到左 .scss 檔案，然後是 css loader，最後是 style loader。
            loaders: ["style", "css", "sass"]
          }]
    }
};