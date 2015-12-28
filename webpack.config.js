module.exports = {
  entry: "./test/ArtistSpec.js",
  output: {
    path: "./test/",
    filename: "spec.js",
    publicPath: "/test/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
