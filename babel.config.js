module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', 'js', 'jsx', '.json'],
        alias: {
          '@assets': './assets',
          '@components': './src/shared/components',
          '@atoms': './src/shared/atoms',
          '@config': './src/config',
          '@core': './src/core',
          '@forms': './src/shared/forms',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
