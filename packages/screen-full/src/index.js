const { resolve } = require('path');

module.exports = {
  name: 'screen-full',

  enhanceAppFiles: [resolve(__dirname, 'enhanceAppFile.js')]
};
