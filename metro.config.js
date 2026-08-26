// Metro bundler configuration for the Shower Slots app.
//
// This file keeps the default React Native Metro behavior while making the
// project root and source extensions explicit. The small fallback below lets
// the same config work with either the newer @react-native/metro-config
// package or the base metro-config package.

const path = require('path');

let metroConfig;

try {
  metroConfig = require('@react-native/metro-config');
} catch (error) {
  metroConfig = require('metro-config');
}

const { getDefaultConfig, mergeConfig } = metroConfig;

const config = {
  projectRoot: __dirname,
  watchFolders: [__dirname],
  resolver: {
    sourceExts: ['js', 'jsx', 'json'],
    nodeModulesPaths: [path.join(__dirname, 'node_modules')],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);