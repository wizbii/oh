module.exports = {
  entry: './index.js',
  output: {
    path: '',
    filename: 'umd.js',
    library: 'oh',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'] }
    ]
  }
}
