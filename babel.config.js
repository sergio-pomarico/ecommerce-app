module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', 'js', 'jsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/shared/components',
          '@config': './src/config',
          '@core': './src/core',
          '@forms': './src/shared/forms',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@store': './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
