const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // Other configurations...

  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "util": require.resolve("util/"),
      "process": require.resolve("process/browser")
    }
  }
};
