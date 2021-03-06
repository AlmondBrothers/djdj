module.exports = {
  entry: './public/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel?presets[]=react,presets[]=es2015'
        ],
      }
    ]
  }
}
