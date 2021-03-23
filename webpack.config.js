const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
