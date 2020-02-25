# webpack-test

npm來創建一個package.json
`npm init`

安裝webpack
`npm install webpack webpack-cli --save-dev`

安裝Babel
`npm install babel-loader @babel/core @babel/preset-env --save-dev`


創建設定檔
專案資料夾下創立一個webpack.config.js

`"scripts": {
    "build": "webpack --mode production",
    "watch": "webpack --mode development --watch",
    "start": "webpack --mode development"
  },`
