const path = require('path');

module.exports = {
  webpack: {
    alias: {
      // Add an alias for the tina directory
      '~tina': path.resolve(__dirname, 'tina'),
    },
    configure: (webpackConfig) => {
      // Allow importing from outside the src directory
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );

      if (scopePluginIndex > -1) {
        webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      }

      // Add fallbacks for node core modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "path": require.resolve("path-browserify"),
        "url": require.resolve("url/"),
      };

      return webpackConfig;
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~tina/(.*)$': '<rootDir>/tina/$1',
      },
    },
  },
};