/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const obfuscator = require('obfuscator-io-metro-plugin');

const jsoMetroPlugin = obfuscator(
  {
    compact: true,
    soucemap: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    selfDefending: true,
  },

  {
    runInDev: false,
    logObfuscatedFiles: true,,
  },
);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },

  ...jsoMetroPlugin
};
