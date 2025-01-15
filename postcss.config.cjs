module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-for'),
    require('postcss-calc'),
    require('postcss-normalize'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : []),
  ],
};
