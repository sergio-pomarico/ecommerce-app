import React, {ReactNode} from 'react';
import {
  createTheme,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from '@shopify/restyle';
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  FlexStyle,
  Dimensions,
} from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle | FlexStyle;
};

const {width} = Dimensions.get('screen');
export const aspectRatio = width / 375;

//const palette = {};

const theme = createTheme({
  colors: {},
  spacing: {
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 64,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 64,
  },
  breakpoints: {},
  textVariants: {},
});

export const ThemeProvider = ({children}: {children: ReactNode}) => (
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();

export const makeStyle =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const curretTheme = useTheme();
    return styles(curretTheme);
  };

export default theme;
