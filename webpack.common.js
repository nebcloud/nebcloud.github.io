const path = require('path');

module.exports = {
  entry: {
    app: './js/hoverWindow.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/hoverWindow.js',
  },
};
