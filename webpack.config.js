const path = require('path')

module.exports = {
  mode: 'development',
  entry: './docs/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
