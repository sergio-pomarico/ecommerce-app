module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', 'js', 'jsx', '.json'],
        alias: {
          '@config': './src/config',
          '@components': './src/components',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
