module.exports = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
      options: {
        interpolate: true
      }
    }
  ]
};
