const path = require("path");

module.exports = function (env) {
  return {
    mode: "production",
    context: path.resolve(path.join(__dirname, "src")),
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "../../api"),
      filename: "test.js",
      library: "test",
      libraryTarget: "commonjs2",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [{loader:'ts-loader',
          options: {
            transpileOnly: true,
          }}],
          exclude: /node_modules/,
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.html$|\.txt$|\.wav$|\.mp3$/,
          use: ["file-loader"],
        },
      ],
    },
    optimization: {
      minimize: false,
      moduleIds: "named",
    },
    target: "node",
    externals: {},
    node: {
      // Allow these globals.
      __filename: false,
      __dirname: false,
    },
    stats: "errors-only",
    bail: true,
    devtool: 'source-map',
  };
};
