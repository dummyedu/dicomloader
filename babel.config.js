module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'false',
        corejs: 'core-js@3',
        targets: {
          chrome: 68,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
  ],
  overrides: [
    {
      test: /\.ts$/,
      plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
    },
  ],
};
