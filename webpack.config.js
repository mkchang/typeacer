var path = require('path');
var SRC_DIR = path.join(__dirname, 'public/client/src');
var DIST_DIR = path.join(__dirname, 'public/client/dist');

module.exports = {
  entry: {
    index: `${SRC_DIR}/index.jsx`
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "public/client/src"), 
      path.resolve(__dirname, "public/client/src/components"), 
      path.resolve(__dirname, "node_modules")
    ]
  }
};