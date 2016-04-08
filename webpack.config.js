/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'css!style!stylus' },
      {
          test: /\.js?$/,
          exclude: [/node_modules/],
          loader: 'babel',
          query: { presets: ['es2015'] }
      },
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
