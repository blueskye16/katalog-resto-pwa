const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-image-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-font',
            expiration: {
              maxEntries: 50,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-assets',
            expiration: {
              maxEntries: 50,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    }),
  ],
};
