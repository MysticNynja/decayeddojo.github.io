module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        path: require.resolve("path-browserify"),
        url: false, // TinaCMS doesn't require a 'url' polyfill
      };
      return webpackConfig;
    },
  },
};