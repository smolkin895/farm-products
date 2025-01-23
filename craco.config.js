const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@block': path.resolve(__dirname, './src/components/block'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@page': path.resolve(__dirname, './src/components/page'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@app': path.resolve(__dirname, './src/components/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
};