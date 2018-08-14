const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// process.noDeprecation = true; // see https://github.com/webpack/loader-utils/issues/56

module.exports = options => ({
  entry: { app: path.join(process.cwd(), 'app/index.js') },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourcemap: false,
      parallel: true,
      toplevel: true,
      uglifyOptions: {
        compress: {
          ecma: 6,
          toplevel: true,
          passes: 2,
        },
      },
    }),
    // new BundleAnalyzerPlugin({ 'process.env.NODE_ENV': '"production"' }),
  ],
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  target: 'node',
});
