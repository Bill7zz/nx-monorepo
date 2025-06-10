const path = require('path');
const { withNxMetro } = require('@nx/react-native');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const { generate } = require('@storybook/react-native/scripts/generate');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

generate({
  configPath: path.resolve(__dirname, './.rnstorybook'),
});

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  cacheVersion: '@nx-monorepo/mobileApp',
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
  },
};

const storybookConfig = withStorybook(defaultConfig, {
  // set to false to disable storybook specific settings
  // you can use a env variable to toggle this
  enabled: true,
  useJs: true,
  unstable_enablePackageExports: true,
  unstable_enableSymlinks: true,
  unstable_allowRequireContext: true,
  configPath: path.resolve(__dirname, './.rnstorybook'),
});

module.exports = withNxMetro(mergeConfig(wrapWithReanimatedMetroConfig(storybookConfig, customConfig)), {
  // Change this to true to see debugging info.
  // Useful if you have issues resolving modules
  debug: false,
  // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
  extensions: [],
  // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
  watchFolders: [],
});
