const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, env) {
  config.plugins = (config.plugins || []).concat([
    new NodePolyfillPlugin()
  ]);

  config.resolve = {
    ...config.resolve,
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser"),
      "assert": require.resolve("assert/"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "timers": require.resolve("timers-browserify"),
      "url": require.resolve("url/"),
      "zlib": require.resolve("browserify-zlib")
    }
  };

  return config;
};
