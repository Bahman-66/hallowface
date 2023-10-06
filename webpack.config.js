const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/index.ts", // Entry point (your TypeScript file)
  output: {
    filename: "app.js", // Output bundle filename
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  resolve: {
    extensions: [".ts", ".js"], // Recognize .ts and .js extensions
    fallback: {
      path: false, // Do not include a polyfill for 'path' module
      constants: false,
      stream: false,
      assert: false,
      util: false,
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply loader to .ts files
        use: "ts-loader", // Use the ts-loader for .ts files
        exclude: /node_modules/, // Exclude node_modules from TypeScript compilation
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["src/*.js"],
      cleanOnceBeforeBuildPatterns: ["dist/*.js"],
    }),
  ],
};
